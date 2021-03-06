import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../services/api';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

function OrphanagesMap() {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	useEffect(() => {
		api.get('orphanages').then(response => {
			setOrphanages(response.data)
		});
	}, []);

	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando sua visita :D</p>
				</header>

				<footer>
					<strong>Juiz de Fora</strong>
					<span>Minas Gerais</span>
				</footer>
			</aside>

			<Map
				center={[-21.7568523, -43.3487376]}
				zoom={13}
				style={{ width: '100%', height: '100%' }}
			>
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>

				{
					orphanages.map(orphanage => (
						<Marker
							position={[orphanage.latitude, orphanage.longitude]}
							icon={mapIcon}
							key={orphanage.id}
						>
							<Popup closeButton={false} minWidth={240} maxWidth={240}>
								{orphanage.name}
								<Link to={`/orphanages/${orphanage.id}`}>
									<FiArrowRight size={20} color="#FFF" />
								</Link>
							</Popup>
						</Marker>

					))
				}
			</Map>

			<div>
				<Link to="/orphanages/create" className="create-orphanage">
					<FiPlus size={32} color="FFF" />
				</Link>
			</div>
		</div>
	)
}

export default OrphanagesMap;