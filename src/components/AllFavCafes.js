/* eslint-disable react/prop-types */
import React from 'react';
import FavCafe from './FavCafe';
import { useAppContext } from '../context';

// eslint-disable-next-line
export const AllFavCafes = (props) => {
  // eslint-disable-next-line
  const { className, favCafes, removeFavCafe } = props;
  const { userContext } = useAppContext();
  // eslint-disable-next-line
  const [user, setUser] = userContext;

  console.log('favCafes: ', favCafes);

  // show a user's favourite cafes
  const showFavCafes = () => {
    if (!favCafes.length) {
      return <p>You have not added any cafés to your favourites.</p>;
    }

    // eslint-disable-next-line
    return favCafes.map((fav) => {
      return <FavCafe key={fav.id} fav={fav} removeFavCafe={removeFavCafe} />;
    });
  };

  return <div id="favCafeList">{user.auth ? showFavCafes() : ''}</div>;
};
