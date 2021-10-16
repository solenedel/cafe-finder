import React from 'react';

// eslint-disable-next-line
const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <div className="logo">café finder</div>
      <ul>
        <li>Login</li>
        <li>Favourites</li>
      </ul>
    </nav>
  );
};

export default Nav;
