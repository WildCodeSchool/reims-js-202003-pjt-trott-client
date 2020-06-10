import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MyMap.css';

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 44.8420873,
      lng: -0.5754373,
      zoom: 15,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            You are here
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MyMap;
