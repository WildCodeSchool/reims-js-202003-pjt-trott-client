import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import L from 'leaflet';
import MarkerList from './MarkerList'
import './MyMap.css';

const myIcon = L.icon({
  iconUrl: 'https://www.scafom-echafaudage.fr/wp-content/uploads/2018/10/marker_2-512.png',
  iconSize: [60, 50],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
})

const client = new ApolloClient({
  uri : 'http://flow-api.fluctuo.com/v1?access_token=g8bGqo424KsGKVRw8wxOZ7oGdWmM4lyL'
});

const posMarker = [44.8420873,-0.5754373];
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
    <ApolloProvider client={client}>
      <Map className="map" center={position} zoom="18"/*zoom={zoom}*/ onViewportChange={(viewport) => { setLat(viewport.center[0]); setLng(viewport.center[1])}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap">Toto</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*<MarkerList data={data} /> */}
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
    </ApolloProvider>
  );
}

export default MyMap;
