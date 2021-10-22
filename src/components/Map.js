import React from 'react';
import mapStyles from './mapStyles';
// eslint-disable-next-line
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// eslint-disable-next-line
const Map = () => {
  const libraries = ['places'];
  const mapContainerStyle = {
    width: '80vw',
    height: '90vh',
    marginTop: '50px',
  };
  const center = {
    lat: 49.24966,
    lng: -123.11934,
  };

  const options = { styles: mapStyles };

  // load Google Map scripts

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps...';

  // finished loading Google Map scripts

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={11} center={center} options={options} />
  );
};

export default Map;
