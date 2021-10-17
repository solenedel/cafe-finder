import React from 'react';

// eslint-disable-next-line
const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <div id="nav-flexbox">
        <div id="logo">Café Finder</div>
        <ul>
          <li>Login</li>
          <li>Favourites</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
