import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import L from 'leaflet';
import './MyMap.css';

const myIcon = L.icon({
  iconUrl: 'https://www.scafom-echafaudage.fr/wp-content/uploads/2018/10/marker_2-512.png',
  iconSize: [60, 50],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const posMarker = [44.8420873, -0.5754373];
const defaultFluctuoAPI = gql`
{
  vehicles (lat: ${posMarker[0]}, lng: ${posMarker[1]}) {
    id
    type
    attributes
    lat
    lng
    provider {
      name
    }
  }
}
`;

function MyMap() {

  const [lat, setLat] = useState(44.8420873);
  const [lng, setLng] = useState(-0.5754373);
  const [zoom, setZoom] = useState(18);
  const [fluctuoAPI, setFluctuoAPI] = useState(defaultFluctuoAPI);

  const position = [lat,lng];
  const { loading, error, data } = useQuery(fluctuoAPI);

  useEffect(() => {
    const posMarker = [44.8420873,-0.5754373];
    const fluctuoAPI = gql`
    {
      vehicles (lat: ${posMarker[0]}, lng: ${posMarker[1]}) {
        id
        type
        attributes
        lat
        lng
        provider {
          name
        }
      }
    }
    `;
    setFluctuoAPI(fluctuoAPI);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Map className="map" center={position} zoom="18"/*zoom={zoom}*/ onViewportChange={(viewport) => { setLat(viewport.center[0]); setLng(viewport.center[1])}}>
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/%27%3EMapbox</a> © <a href='http://www.openstreetmap.org/copyright%27%3EOpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url="https://api.mapbox.com/styles/v1/brianlag/ckbrnsqyh327j1iloa35gzxos/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpYW5sYWciLCJhIjoiY2ticmx5anhtMnhzMjJ4bDluM2N3dzJxMSJ9.3ynE8Sf5t0N7PdHaZukyDw"
      />
      {data && data.vehicles.map((vehicle) => (
        <Marker position={[vehicle.lat, vehicle.lng]} icon={myIcon} data={data}>
          <Popup>
            You are here
          </Popup>
        </Marker>
      ))}
      <Marker position={posMarker} icon={myIcon} data={data}>
        <Popup>
          You are here
        </Popup>
      </Marker>
    </Map>
  );
}

export default MyMap;
