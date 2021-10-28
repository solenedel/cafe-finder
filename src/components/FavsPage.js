import React from 'react';
import { useAppContext } from '../context';

// eslint-disable-next-line
export const FavsPage = ({ className }) => {
  const { userContext } = useAppContext();
  // eslint-disable-next-line
  const [user, setUser] = userContext;

  return (
    <main className={className} id="favs-page-container">
      <img src="./images/cafe-2.png" alt="cafe icon" />
      <h3>My favourite cafés</h3>
      <p>{!user.auth ? 'You must log in to see your favourite cafés.' : ''}</p>
    </main>
  );
};
