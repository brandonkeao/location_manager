import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Placemark from './Placemark';

const Placemarks = ({ favorites, onClick, activePlace }) => {

	favorites = favorites.map(fav => {
		const { timestamp } = fav;
		const isActive = activePlace === fav.place;

		return (
			<Placemark key={timestamp} favorite={fav} timestamp={timestamp} active={isActive} onClick={onClick}></Placemark>
		);
	});

	return (
		<ListGroup className="placemarks">
			{favorites}
		</ListGroup>
	);
}

export default Placemarks;