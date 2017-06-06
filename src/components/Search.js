import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

// Declare a constant for the Google Places API
const google = window.google;

// Create a Search class or a stateless functional search 
//(See note)
class Search extends Component {
	constructor() {
		super();
		// Bind onSuggestSelect to the <Search> component
		this.onSuggestSelect = this.onSuggestSelect.bind(this);
	} // closes constructor 

	// Create an onSuggestSelect callback passing label (place name) 
	// and location (place coordinates) from the suggest parameter.
	// Pass label and location to the setLocation callback on the
	// <App> compoenent via the onSuggest prop. 
	// Clear input after selecting suggest
	onSuggestSelect({ label, location }) {
		this.props.onSuggest(label, location);
		this._geoSuggest.clear();
	}


	render() {
		const fixtures = [
			{label: 'Istanbul, Turkey', location: {lat: 41.013611, lng: 28.955}},
        	{label: 'Dubai, United Arab Emirates', location: {lat: 25.263056, lng: 55.297222}},
        	{label: 'Bangkok, Thailand', location: {lat: 13.75, lng: 100.466667}}
		];

		return (
			// Render <Geosuggest>
			// Pass default places to Geosuggest
			// Pass the onSuggest callback to Geosuggest
			// Set the default location for the Google Places API
			<Geosuggest
				ref={el=>this._geoSuggest=el}
				placeholder="Enter a location"
				initialValue=""
				fixtures={fixtures}
				onSuggestSelect={this.onSuggestSelect}
				location={new google.maps.LatLng(-4.05, 39.666667)}
				radius="20" />
		);
	} // closed render()

} // closes Component

export default Search;