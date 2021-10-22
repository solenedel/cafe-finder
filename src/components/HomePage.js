import React from 'react';
import { WrappedMap } from './Map';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  return (
    <main className={className} id="home-page-container">
      <div>Find cafés near you.</div>
      <img src="./images/coffee-1.png" alt="coffee icon" />
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </main>
  );
};
