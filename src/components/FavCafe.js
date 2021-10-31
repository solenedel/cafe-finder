/* eslint-disable react/prop-types */
import React from 'react';

const FavCafe = (props) => {
  const { fav, removeFavCafe } = props;

  return (
    <div className="favCafe">
      <h4>{(fav.cafe_name, fav.fav_id)}</h4>
      <ul>
        <li>Wifi: {fav.has_wifi ? 'yes' : 'no'}</li>
        <li>Open 24 hours: {fav.is_open_24_hours ? 'yes' : 'no'}</li>
        <li>Organic coffee/tea: {fav.has_organic_tea_coffee ? 'yes' : 'no'}</li>
        <li>noise level: {fav.noise_level}</li>
      </ul>
      <button type="button" onClick={() => removeFavCafe(fav.fav_id)}>
        Remove
      </button>
    </div>
  );
};

export default FavCafe;
