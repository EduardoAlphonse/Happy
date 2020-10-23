import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

import logo from '../images/logo-vertical.svg';

import '../styles/pages/restricted-access.css';

export default function RestrictedAccess() {
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(event: FormEvent) {
		event.preventDefault();

		const data = { email, password };

		await api.post('/user/login', data)
			.then(response => {
				const { message, success } = response.data;
				if (success) {
					alert(message);
					history.push('/');
					return
				}

				alert(message);
				return
			});
	}

	return (
		<div id="login-page-container">
			<div className="location">
				<img src={logo} alt="Logo da Happy" />
				<strong>Juiz de Fora</strong>
				<span>Minas Gerais</span>
			</div>

			<div className="login-form-container">
				<form onSubmit={handleLogin} className="login-form">
					<fieldset>
						<legend>Login</legend>

						<div className="input-block">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</div>

						<div className="input-block">
							<label htmlFor="password">Senha</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
						</div>
					</fieldset>
					<button className="confirm-button" type="submit">
						Confirmar
          </button>
				</form>
			</div>
		</div>
	)
}