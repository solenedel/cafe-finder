import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context';

// eslint-disable-next-line
export const FavsPage = ({ className }) => {
  const { userContext } = useAppContext();
  // eslint-disable-next-line
  const [user, setUser] = userContext;
  // helper: show all of a user's favourite cafes
  const [favCafes, setFavCafes] = useState([]);

  // result.rows in express back end is equal to res.data in front end
  useEffect(() => {
    axios
      .get('/favourites')
      .then((res) => {
        console.log('res.data: ', res.data);
        setFavCafes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // show a user's favourite cafes
  const showFavCafes = () => {
    // eslint-disable-next-line
    if (!favCafes.length) {
      return <p>You have not added any cafés to your favourites.</p>;
    }
    return favCafes.map((fav) => {
      return (
        <div id="favCafe">
          <h4>{fav.cafe_name}</h4>
          <ul>
            <li>Wifi: {fav.has_wifi ? 'yes' : 'no'}</li>
            <li>Open 24 hours: {fav.is_open_24_hours ? 'yes' : 'no'}</li>
            <li>Organic coffee/tea: {fav.has_organic_tea_coffee ? 'yes' : 'no'}</li>
            <li>noise level: {fav.noise_level}</li>
          </ul>
        </div>
      );
    });
  };

  return (
    <main className={className} id="favs-page-container">
      <img src="./images/cafe-2.png" alt="cafe icon" />
      <h3>My favourite cafés</h3>
      <p>{!user.auth ? 'You must log in to see your favourite cafés.' : ''}</p>
      <div id="favCafeList">{showFavCafes()}</div>
    </main>
  );
};
