import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

let allLime = [];
let allBird = [];
let allDott = [];
let allVoi = [];
let allTier = [];
let allWind = [];
let allPony = [];

function trottChoice(element) {
  switch (element.provider.name) {
    case "Lime":
      allLime = [...allLime, element];
      break;
    case "Bird":
      allBird = [...allBird, element];
      break;
    case "Dott":
      allDott = [...allDott, element];
      break;
    case "Voi" :
      allVoi = [...allVoi, element];
      break;
    case "Tier" :
      allTier = [...allTier, element];
      break;
    case "Wind" :
      allWind = [...allWind, element];
      break;
    case "Pony" :
      allPony = [...allPony, element];
      break;
    default:
      break;
  }
}

const myIcon = L.icon({
  iconUrl: 'https://www.scafom-echafaudage.fr/wp-content/uploads/2018/10/marker_2-512.png',
  iconSize: [60, 50],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const posMarker = [48.866667, 2.333333];
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
  const [lat, setLat] = useState(48.866667);
  const [lng, setLng] = useState(2.333333);
  /* const [zoom, setZoom] = useState(18); */
  const [fluctuoAPI, setFluctuoAPI] = useState(defaultFluctuoAPI);

  const position = [lat, lng];
  const { data } = useQuery(fluctuoAPI);

  useEffect(() => {
    const posMarker = [48.866667, 2.333333];
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
    <Map className="map" center={position} zoom="18"/* onViewportChange={(viewport) => { setLat(viewport.center[0]); setLng(viewport.center[1])}} */>
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/%27%3EMapbox</a> © <a href='http://www.openstreetmap.org/copyright%27%3EOpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url="https://api.mapbox.com/styles/v1/brianlag/ckbrnsqyh327j1iloa35gzxos/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpYW5sYWciLCJhIjoiY2ticmx5anhtMnhzMjJ4bDluM2N3dzJxMSJ9.3ynE8Sf5t0N7PdHaZukyDw"
      />
      {data && data.vehicles.filter(trottChoice)}
      {console.log("DottTrott", allDott)}
      <MarkerClusterGroup>
        {allBird.map(trott => (
          <Marker position={[trott.lat, trott.lng]} icon={myIcon}>
            <Popup>
              You are Bird
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {allDott.map(trott => (
          <Marker position={[trott.lat, trott.lng]} icon={myIcon}>
            <Popup>
              You are Dott
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {allVoi.map(trott => (
          <Marker position={[trott.lat, trott.lng]} icon={myIcon}>
            <Popup>
              You are Voi
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {allTier.map(trott => (
          <Marker position={[trott.lat, trott.lng]} icon={myIcon}>
            <Popup>
              You are Tier
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {allWind.map(trott => (
          <Marker position={[trott.lat, trott.lng]} icon={myIcon}>
            <Popup>
              You are Wind
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {allPony.map(trott => (
          <Marker position={[trott.lat, trott.lng]} icon={myIcon}>
            <Popup>
              You are Pony
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </Map>
  );
}

export default MyMap;
