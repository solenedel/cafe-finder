/* eslint-disable */
import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import mapStyles from './mapStyles';
import '@reach/combobox/styles.css';

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

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  // load Google Map scripts

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps...';

  // finished loading Google Map scripts

  return (
    <>
      <h3>Cafés ☕</h3>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
      />
    </>
  );
};

export default Map;
