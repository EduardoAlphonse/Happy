import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiCheck, FiArrowLeft } from 'react-icons/fi';
import RouteButton from '../components/RouteButton';
import api from '../services/api';

import logo from '../images/logo-vertical.svg';

import '../styles/pages/restricted-access.css';

export default function RestrictedAccess() {
	const { push } = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayCheckIcon, setDisplayCheckIcon] = useState('none');

	async function handleLogin(event: FormEvent) {
		event.preventDefault();

		// Remove after implement
		// login functionality
		push('/dashboard/orphanages');
		return;
		// 

		const data = { email, password };

		await api.post('/user/login', data)
			.then(response => {
				const { message, success } = response.data;
				if (success) {
					alert(message);
					push('/');
					return
				}

				alert(message);
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

					<div className="form-options">
						<label htmlFor="remember-me" className="checkbox-container">
							<input
								type="checkbox"
								name="remember-me"
								id="remember-me"
								onChange={() => setDisplayCheckIcon(displayCheckIcon === 'none' ? 'block' : 'none')}
								checked={displayCheckIcon === 'block'}
							/>
							<span className="checkmark">
								<FiCheck color="#FFF" style={{ display: displayCheckIcon }} />
							</span>
							<span className="label-text">Lembrar-me</span>
						</label>

						<div className="forget-password">
							<RouteButton to="/" className="null-link">
								<span>Esqueci minha senha</span>
							</RouteButton>
						</div>
					</div>
					<button
						className="confirm-button"
						type="submit"
						disabled={email === '' || password === ''}
					>
						Confirmar
          </button>
				</form>

				<Link to="/" className="cancel-login">
					<FiArrowLeft size={26} />
				</Link>
			</div>
		</div>
	)
}