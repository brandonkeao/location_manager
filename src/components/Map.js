import React from 'react';
import {Gmaps, Marker, Circle} from 'react-gmaps';

const params = {
	v: '3.exp',
	key: process.env.REACT_APP_GOOGLE_PLACES_KEY
};

const Map = ({lat, lng}) =>
	<Gmaps
		className="Map"
    	width={'600px'}
    	height={'400px'}
    	lat={lat}
    	lng={lng}
    	zoom={12}
    	loadingMessage={'Don\'t worry, Be happy'}
    	params={params}>
    	<Marker
    		lat={lat}
    		lng={lng}
    		draggable={true} />
    	<Circle
    		lat={lat}
    		lng={lng}
    		radius={500} />
	</Gmaps>

export default Map;