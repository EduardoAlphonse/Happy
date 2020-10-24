import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

import User from '../models/User';

import UsersView from '../views/UsersView';

export default {
	async login(request: Request, response: Response) {
		const { email, password } = request.body;

		const usersRepository = getRepository(User);

		const user = await usersRepository.findOne({ email });

		if (!user) {
			return response.json({
				message: `E-mail não cadastrado.`,
				success: false,
			});
		}

		await bcrypt.compare(password, user.password, (err, result) => {
			if (result) {
				return response.json({
					message: `Bem vindo ${user?.name}.`,
					success: true,
				});
			}

			return response.json({
				message: `Senha incorreta.`,
				success: false,
			});
		})
	},

	async create(request: Request, response: Response) {
		const data = request.body;

		const usersRepository = getRepository(User);

		const emailAlreadyInUse = await usersRepository.findOne({ email: request.body.email })

		if (emailAlreadyInUse) {
			return response.json({ message: 'E-mail já cadastrado. ' });
		}

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			password: Yup.string().min(8).required(),
		})

		await schema.validate(data, {
			abortEarly: false,
		})


		await bcrypt.hash(data.password, 10, async (err, hash) => {
			if (err) {
				return response.json({
					err: err.name,
					message: err.message,
				});
			}

			const user = usersRepository.create({ ...data, password: hash });

			await usersRepository.save(user);

			return response.status(201).json(UsersView.render(user));
		});
	},
}