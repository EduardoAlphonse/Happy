import React from 'react';
import { FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi';

import RouteButton from './RouteButton';
import BackButton from './BackButton';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';

interface SidebarProps {
	isDashboard?: boolean;
	orphanagesTab?: boolean;
	requestsTab?: boolean;
}

export default function SideBar({ isDashboard, orphanagesTab, requestsTab }: SidebarProps) {
	return (
		<aside className='app-sidebar'>
			<img src={mapMarkerImg} alt="Happy" />

			{
				isDashboard && (
					<div className="dashboard-options">
						<RouteButton to="/dashboard/orphanages" active={orphanagesTab}>
							<FiMapPin size={24} color="#FFF" />
						</RouteButton>

						<RouteButton to="/dashboard/requests" active={requestsTab}>
							<FiAlertCircle size={24} color="#FFF" />
						</RouteButton>
					</div>
				)
			}

			<footer>
				<BackButton>
					<FiPower size={24} color="#FFF" />
				</BackButton>
			</footer>
		</aside>
	)
}