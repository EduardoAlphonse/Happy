import React, { useState, useEffect } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Link, useHistory } from "react-router-dom";
import { FiEdit3, FiTrash } from 'react-icons/fi';

import SideBar from "../components/SideBar";
import mapIcon from '../utils/mapIcon';
import api from "../services/api";

import '../styles/pages/dashboard.css';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

export default function Dashboard() {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	useEffect(() => {
		api.get('orphanages').then(response => {
			setOrphanages(response.data);
			console.log(response.data);
		})
	}, []);

	return (
		<div id="page-dashboard">
			<SideBar isDashboard orphanagesTab />

			<main>
				<header>
					<h1>Orfanatos cadastrados</h1>
					{orphanages.length === 0
						? <span>Carregando...</span>
						: <span>{orphanages.length} orfanatos encontrados</span>}
				</header>

				<hr />

				<div className="orphanages-cards">

					{
						orphanages.map(orphanage => (
							<div key={orphanage.id} className="orphanage-card">

								<Map
									className="map"
									center={[orphanage.latitude, orphanage.longitude]}
									zoom={15}
									dragging={false}
									zoomControl={false}
									scrollWheelZoom={false}
									doubleClickZoom={false}
								>
									{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
									<TileLayer
										url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
									/>
									<Marker
										position={[orphanage.latitude, orphanage.longitude]}
										icon={mapIcon}
										key={orphanage.id}
									>
										{/* <Popup closeButton={false} minWidth={240} maxWidth={240}>
											{orphanage.name}
											<Link to={`/orphanages/${orphanage.id}`}>
												<FiArrowRight size={20} color="#FFF" />
											</Link>
										</Popup> */}
									</Marker>
								</Map>

								<div className="orphanage-info">

									<span className="orphanage-name">
										{orphanage.name}
									</span>

									<div className="orphanage-options">
										<Link to="/orphanage/edit">
											<FiEdit3 size={20} color="#FFF" />
										</Link>
										<Link to="/orphanage/remove">
											<FiTrash size={20} color="#FFF" />
										</Link>
									</div>

								</div>

							</div>
						))
					}
				</div>
			</main>
		</div>
	);
}