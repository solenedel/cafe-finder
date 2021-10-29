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
        console.log(res.data);
        setFavCafes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showFavCafes = () => {
    // eslint-disable-next-line
    if (!favCafes.length) {
      return <p>You have not added any cafés to your favourites.</p>;
    }
    return favCafes.map((fav) => <p>{fav.cafe_id}</p>);
  };

  return (
    <main className={className} id="favs-page-container">
      <img src="./images/cafe-2.png" alt="cafe icon" />
      <h3>My favourite cafés</h3>
      <p>{!user.auth ? 'You must log in to see your favourite cafés.' : ''}</p>
      {showFavCafes()}
    </main>
  );
};
