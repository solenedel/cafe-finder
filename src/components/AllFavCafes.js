import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context';

// eslint-disable-next-line
export const AllFavCafes = ({ className }) => {
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
        <div className="favCafe">
          <h4>{fav.cafe_name}</h4>
          <ul>
            <li>Wifi: {fav.has_wifi ? 'yes' : 'no'}</li>
            <li>Open 24 hours: {fav.is_open_24_hours ? 'yes' : 'no'}</li>
            <li>Organic coffee/tea: {fav.has_organic_tea_coffee ? 'yes' : 'no'}</li>
            <li>noise level: {fav.noise_level}</li>
          </ul>
          <button type="submit">Remove</button>
        </div>
      );
    });
  };

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

  return <div id="favCafeList">{user.auth ? showFavCafes() : ''}</div>;
};