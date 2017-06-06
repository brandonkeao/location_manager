import React, { Component } from 'react';
import Search from './components/Search';
import Map from './components/Map';

import './App.css';
import 'react-bootstrap';
import 'css-type-base';

class App extends Component {
  
  constructor() {
    super();
    // Set initial state values
    this.state = {
      favorites: this.setFavorites(),
      currentPlace: "Mombasa, Kenya",
      coords: {
        lat: -4.05,
        lng: 39.666667
      }
    };

    // Bind setLocation to the <App> component
    this.setLocation = this.setLocation.bind(this);

  } // closes constructor()

  setFavorites() {
    let favorites = [];
    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }
    return favorites;
  }

  // Create setLocation callback and setState with place and coords
  // parameters
  setLocation(place, coords) {
    this.setState({
      currentPlace: place,
      coords: coords
    });
  }

  render() {

    // Get currentPlace and coords from state
    // Get lat and lng from coords
    const { currentPlace, coords, state } = this.state;
    const { lat, lng } = coords;

    return (
      <div className="App">
        <h1 className="heading">Location Manager</h1>
        <Search onSuggest={this.setLocation} />
        <Map lat={lat} lng={lng} />
      </div>
    );
  } // closes render()
} // closes Component 

export default App;
