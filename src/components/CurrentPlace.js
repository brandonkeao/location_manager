import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class CurrentPlace extends Component {
	constructor() {
		super();
		this.toggleFavorite = this.toggleFavorite.bind(this);

	} // Closes constructor()

	// Pass currentPlace to the toggleFavorite callback in 
	// <App> with the onFavoriteToggle prop
	toggleFavorite() {
		this.props.onFavoriteToggle(this.props.currentPlace);
	}

	render() {

		// Get currentPlace reference and optionally 
		// lat and lng from <App>
		const { currentPlace } = this.props;
		const { lat, lng } = this.props.coords;

		// Initialize <Glyphicon> star class as star-empty
		let starClassName = "star-empty";

		// Change the starClass to star if currentPlace
		// if a favorite
		if (this.props.favorite) {
			starClassName = "star";
		}

		// Render currentPlace from <App>
		// Return the starClassName glyph to <App> and pass
		// the toggle favorite callback to the onClick prop
		// on <Glyphicon>
		// Render the lat and lng props from <App>

		return (
			<div className="current-place">
				<h3 className="place">{currentPlace}</h3>
				<Glyphicon className="star" bsSize="large" glyph={starClassName} onClick={this.toggleFavorite} aria-hidden="true" />
				<span className="current-coords">{lat}, {lng}</span>
			</div>
		);
	}
} // Closes CurrentPlace

export default CurrentPlace;