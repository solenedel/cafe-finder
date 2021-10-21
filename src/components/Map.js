import React from 'react';
import { GoogleMap } from 'react-google-maps';

const Map = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />;
};

export default Map;
