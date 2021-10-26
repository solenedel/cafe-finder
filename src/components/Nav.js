import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <div id="nav-flexbox">
        <Link to="/" id="logo-link">
          <div id="logo">Café Finder</div>
        </Link>

        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/favourites">
            <li>Favourites</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
