import React, { Component } from 'react';

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
    }
  } // closes constructor()

  setFavorites() {
    let favorites = [];
    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }
    return favorites;
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h2>Welcome to Location Manager</h2>
        </div>
        <p className="App-intro">
          Placeholder for future components...
        </p>
      </div>
    );
  } // closes render()

} // closes Component 

export default App;
