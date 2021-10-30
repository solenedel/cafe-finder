import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context';
import { AllFavCafes } from './AllFavCafes';

// eslint-disable-next-line
export const FavsPage = ({ className }) => {
  const { userContext } = useAppContext();
  // eslint-disable-next-line
  const [user, setUser] = userContext;

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

  // delete a favourite by clicking on remove button
  // eslint-disable-next-line
  const removeFavCafe = (id) => {
    axios
      .delete(`/favourites/${id}`)
      .then(() => {
        console.log(`Successfully deleted favourite id ${id}`);

        // Generate new list of fav cafes
        const newFavCafes = showFavCafes.reduce((acc, fav) => {
          if (fav.id === id) {
            return acc;
          }
          acc.push(fav);
          return acc;
        }, []);
        console.log('newFavCafes', newFavCafes);
        setFavCafes(newFavCafes);
      })
      .catch((err) => console.log('error deleting list: ', err));
  };

  return (
    <main className={className} id="favs-page-container">
      <img src="./images/cafe-2.png" alt="cafe icon" />
      <h3>My favourite cafés</h3>
      <p>{!user.auth ? 'You must log in to see your favourite cafés.' : ''}</p>
      <AllFavCafes removeFavCafe={removeFavCafe} />
    </main>
  );
};
