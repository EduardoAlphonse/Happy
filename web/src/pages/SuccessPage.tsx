import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/success-page.css';

export default function SuccessPage() {
	return (
		<div id="success-page-container">
			<div className="content-wrapper">
				<div className="content">
					<h1>Ebaaa!</h1>
					<p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
					<Link to='/app' className='back-to-map-button'>
						Voltar para o mapa
					</Link>
				</div>
			</div>
		</div>
	)
}