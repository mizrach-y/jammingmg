import React, { Component } from 'react';

import './app.css';
import SearchResults from '../searhresults';
import Playlist from '../playlist';
class App extends Component {
  constructor(props){
    super(props);
    this.state.searchResults = [{name: 'Sweet Dreams'}, {artist: 'misrak'}, {album: 'dreamers'}]
    }
  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
    //   Add a SearchBar component
      <div className="App-playlist">
      //   Add a SearchResults component
      //   Add a Playlist component
      </div>
    </div>
  </div>
    );
  }
}

export default App;
