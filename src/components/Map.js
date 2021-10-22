import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export const Map = () => {
  return <GoogleMap defaultZoom={11} defaultCenter={{ lat: 49.24966, lng: -123.11934 }} />;
};

// WrappedMap is the component we want to insert into the App
export const WrappedMap = withScriptjs(withGoogleMap(Map));
