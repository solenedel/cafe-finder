import React from 'react';

// eslint-disable-next-line
export const AllFavCafes = (props) => {
  // eslint-disable-next-line
  const { className, favCafes, removeFavCafe } = props;

  console.log('favCafes: ', favCafes);

  // show a user's favourite cafes
  const showFavCafes = () => {
    // eslint-disable-next-line
    if (!favCafes.length) {
      return <p>You have not added any cafés to your favourites.</p>;
    }
    // eslint-disable-next-line
    return favCafes.map((fav) => {
      return (
        <div className="favCafe">
          <h4>{fav.cafe_name}</h4>
          <ul>
            <li>Wifi: {fav.has_wifi ? 'yes' : 'no'}</li>
            <li>Open 24 hours: {fav.is_open_24_hours ? 'yes' : 'no'}</li>
            <li>Organic coffee/tea: {fav.has_organic_tea_coffee ? 'yes' : 'no'}</li>
            <li>noise level: {fav.noise_level}</li>
          </ul>
          <button type="button">Remove</button>
        </div>
      );
    });
  };
  return <div id="favCafeList">{user.auth ? showFavCafes() : ''}</div>;
};
