import React from 'react';
import './playlist.css';

import TrackList from '../TrackList';

class Playlist extends React.Component{
  render(){
    return (
      <div className="Playlist">
      <input value="New Playlist"/>
// Add a TrackList component
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
export default Playlist;
