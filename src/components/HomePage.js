import React from 'react';
import { WrappedMap } from './Map';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  return (
    <main className={className} id="home-page-container">
      <div>Find cafés near you.</div>
      <img src="./images/coffee-1.png" alt="coffee icon" />
      <section id="search-section">
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="enter your location" />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </section>
      <div id="map-div" style={{ width: '80vw', height: '100vh' }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </main>
  );
};
