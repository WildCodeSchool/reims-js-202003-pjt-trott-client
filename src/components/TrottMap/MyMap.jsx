import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import PopInfo from './PopInfo';

const tierIcon = L.icon({
  iconUrl: 'https://cdn.fluctuo.com/markers/tier.png',
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const dottIcon = L.icon({
  iconUrl: 'https://cdn.fluctuo.com/markers/dott.png',
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const birdIcon = L.icon({
  iconUrl: 'https://cdn.fluctuo.com/markers/bird.png',
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const voiIcon = L.icon({
  iconUrl: 'https://cdn.fluctuo.com/markers/voi.png',
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const windIcon = L.icon({
  iconUrl: 'https://cdn.fluctuo.com/markers/wind.png',
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const ponyIcon = L.icon({
  iconUrl: 'https://cdn.fluctuo.com/markers/pony.png',
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});
const posMarker = [48.866667, 2.333333];
const defaultFluctuoAPI = gql`
{
  vehicles (lat: ${posMarker[0]}, lng: ${posMarker[1]}) {
    publicId
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
  const [lat, setLat] = useState(48.866667);
  const [lng, setLng] = useState(2.333333);
  const [fluctuoAPI, setFluctuoAPI] = useState(defaultFluctuoAPI);

  const position = [lat, lng];
  const { data } = useQuery(fluctuoAPI);

  useEffect(() => {
    const posMarker = [48.866667, 2.333333];
    const fluctuoAPI = gql`
    {
      vehicles (lat: ${posMarker[0]}, lng: ${posMarker[1]}) {
        battery
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
    <Map className="map" center={position} zoom="18" maxZoom="20">
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/%27%3EMapbox</a> © <a href='http://www.openstreetmap.org/copyright%27%3EOpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url="https://api.mapbox.com/styles/v1/brianlag/ckbrnsqyh327j1iloa35gzxos/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpYW5sYWciLCJhIjoiY2ticmx5anhtMnhzMjJ4bDluM2N3dzJxMSJ9.3ynE8Sf5t0N7PdHaZukyDw"
      />
      <MarkerClusterGroup>
        {data && data.vehicles.filter((vehicle) => vehicle.provider.name === 'Bird')
          .map((vehicle) => (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={birdIcon}>
              <Popup>
                <PopInfo logo="https://cdn.fluctuo.com/providers/bird.jpg" posUser={posMarker} posTrott={[vehicle.lat, vehicle.lng]} energy={vehicle.battery} />
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {data && data.vehicles.filter((vehicle) => vehicle.provider.name === 'Dott')
          .map((vehicle) => (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={dottIcon}>
              <Popup>
                <PopInfo logo="https://cdn.fluctuo.com/providers/dott.jpg" posUser={posMarker} posTrott={[vehicle.lat, vehicle.lng]} energy={vehicle.battery} />
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {data && data.vehicles.filter((vehicle) => vehicle.provider.name === 'Voi')
          .map((vehicle) => (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={voiIcon}>
              <Popup>
                <PopInfo logo="https://cdn.fluctuo.com/providers/voi.jpg" posUser={posMarker} posTrott={[vehicle.lat, vehicle.lng]} energy={vehicle.battery} />
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {data && data.vehicles.filter((vehicle) => vehicle.provider.name === 'Tier')
          .map((vehicle) => (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={tierIcon}>
              <Popup>
                <PopInfo logo="https://cdn.fluctuo.com/providers/tier.jpg" posUser={posMarker} posTrott={[vehicle.lat, vehicle.lng]} energy={vehicle.battery} />
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {data && data.vehicles.filter((vehicle) => vehicle.provider.name === 'Wind')
          .map((vehicle) => (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={windIcon}>
              <Popup>
                <PopInfo logo="https://cdn.fluctuo.com/providers/wind.jpg" posUser={posMarker} posTrott={[vehicle.lat, vehicle.lng]} energy={vehicle.battery} />
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {data && data.vehicles.filter((vehicle) => vehicle.provider.name === 'Pony')
          .map((vehicle) => (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={ponyIcon}>
              <Popup>
                <PopInfo logo="https://cdn.fluctuo.com/providers/pony.jpg" posUser={posMarker} posTrott={[vehicle.lat, vehicle.lng]} energy={vehicle.battery} />
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
    </Map>
  );
}

export default MyMap;
