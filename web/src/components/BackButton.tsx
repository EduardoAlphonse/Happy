import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/components/custom-button.css'

interface RouteButtonProps {
	children?: React.ReactNode;
}

export default function Button({ children }: RouteButtonProps) {
	const { push } = useHistory();

	return (
		<button type="button" onClick={() => push('/')}>
			{children}
		</button>
	)
}