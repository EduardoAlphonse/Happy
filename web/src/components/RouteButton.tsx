import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/custom-button.css'

interface RouteButtonProps {
	to: string;
	children?: React.ReactNode;
	className?: string;
	active?: boolean;
}

export default function Button({ to, children, className, active }: RouteButtonProps) {
	console.log(to);

	return (
		<Link to={to} className={`${className} ${active && 'active'}`}>
			{children}
		</Link>
	)
}