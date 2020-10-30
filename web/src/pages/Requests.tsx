import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Link, useHistory } from "react-router-dom";
import { FiEdit3, FiTrash } from 'react-icons/fi';

import SideBar from "../components/SideBar";
import mapIcon from '../utils/mapIcon';
import api from "../services/api";

import '../styles/pages/dashboard.css';

export default function Requests() {
	return (
		<div id="page-dashboard">
			<SideBar isDashboard requestsTab />

			<main>
				<header>
					<h1>Cadastros pendentes</h1>
					<span>2 orfanatos encontrados</span>
				</header>

				<hr />

				<div className="orphanages-cards">
					<div className="orphanage-card">
						<div className="map">

						</div>
						<div className="orphanage-info">
							<span className="orphanage-map">
								Orfanato esperança
							</span>
							<div className="orphanage-options">
								<Link to="/orphanage/edit">
									<FiEdit3 size={20} color="" />
								</Link>
								<Link to="/orphanage/remove">
									<FiEdit3 size={20} color="" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}