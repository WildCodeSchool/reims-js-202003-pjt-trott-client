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
import trottimg from '../../Image/2.png';

const createClusterCustomIcon = (cluster) => {
  const count = cluster.getChildCount();
  let size = 'LargeXL';
  let countMarker = '100+';

  if (count < 10) {
    size = 'Small';
    countMarker = count;
  } else if (count >= 10 && count < 20) {
    size = 'Medium';
    countMarker = '10+';
  } else if (count >= 20 && count < 50) {
    size = 'Medium';
    countMarker = '20+';
  } else if (count >= 30 && count < 40) {
    size = 'Medium';
    countMarker = '30+';
  } else if (count >= 40 && count < 50) {
    size = 'Medium';
    countMarker = '40+';
  } else if (count >= 50 && count < 500) {
    size = 'Large';
    countMarker = '50+';
  }
  const options = {
    cluster: `markerCluster${size}`,
  };

  return L.divIcon({
    html:
      `<div class="markerClusterBlock">
        <img src=${trottimg} alt="trott img" />
        <span class="markerClusterLabel">${countMarker}</span>
      </div>`,
    className: `${options.cluster}`,
  });
};

const Icon = (operator) => L.icon({
  iconUrl: `http://cdn.fluctuo.com/markers/${operator}.png`,
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const posMarker = [48.866667, 2.333333];
const generateGql = (posMarker) => (
  gql`
{
  ${[
    'tier',
    'dott',
    'bird',
    'voi',
    'wind',
    'pony',
  ].reduce((acc, provider) => (`
    ${acc} 
    ${provider} (lat: ${posMarker[0]}, lng: ${posMarker[1]}) {
      publicId
      type
      lat
      lng
      battery
      provider {
        name
        slug
      }
    }
  `), '')}
}
`);

function MyMapTwo() {
  const [lat, setLat] = useState(48.866667);
  const [lng, setLng] = useState(2.333333);
  const [fluctuoAPI, setFluctuoAPI] = useState(generateGql(posMarker));

  const position = [lat, lng];
  const { data } = useQuery(fluctuoAPI);

  useEffect(() => {
    const posMarker = [48.866667, 2.333333];
    const fluctuoAPI = generateGql(posMarker);
    setFluctuoAPI(fluctuoAPI);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Map className="map" center={position} zoom="18" maxZoom="20" /*zoomControl={false}*/>
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/%27%3EMapbox</a> © <a href='http://www.openstreetmap.org/copyright%27%3EOpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="https://api.mapbox.com/styles/v1/brianlag/ckbrnsqyh327j1iloa35gzxos/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpYW5sYWciLCJhIjoiY2ticmx5anhtMnhzMjJ4bDluM2N3dzJxMSJ9.3ynE8Sf5t0N7PdHaZukyDw"
        />
        {data && Object.keys(data).map((provider) => (
          <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
            {data[provider].map((vehicle) => (
              <Marker position={[vehicle.lat, vehicle.lng]} icon={Icon(vehicle.provider.slug)}>
                <Popup>
                  <PopInfo
                    vehicle={vehicle}
                    posUser={posMarker}
                    posTrott={[vehicle.lat, vehicle.lng]}
                  />
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        ))}
      </Map>
    </div>
  );
}

export default MyMapTwo;
