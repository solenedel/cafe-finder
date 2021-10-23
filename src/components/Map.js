/* eslint-disable */
import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
} from '@reach/combobox';
import mapStyles from './mapStyles';
import '@reach/combobox/styles.css';

// { getGeocode, getLatLng }

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
      <Search />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
      />
    </>
  );
};

const Search = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    // eslint-disable-next-line
    clearSuggestion,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 49.24966,
        lng: () => -123.11934,
      },
      radius: 30 * 1000, // in meters
    },
  });

  return (
    <div className="search">
      <Combobox onSelect={(address) => console.log(address)}>
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="enter an address"
        />
      </Combobox>
      <ComboboxPopover>
        {status === 'OK' &&
          data.map(({ id, description }) => {
            return <ComboboxOption key={id} value={description} />;
          })}
      </ComboboxPopover>
    </div>
  );
};

export default Map;
