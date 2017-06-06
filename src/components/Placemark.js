import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import moment from 'moment';
import '../App.css';

class Placemark extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { place, coords } = this.props.favorite;
		this.props.onClick(place, coords);
	}

	render() {
		const { favorite, timestamp } = this.props;

		let placeClassName = 'placemark';

		if (this.props.active) {
			placeClassName += ' active';
		}

		return (
			<ListGroupItem className={placeClassName} onClick={this.handleClick}>
				{favorite.place}
				<span className="createdAt">
					{moment(timestamp).fromNow()}
				</span>
			</ListGroupItem>
		);
	} // Closes render()
} //  Closes Component

export default Placemark;