import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';

// eslint-disable-next-line
const Nav = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const LoginButton = () => (
    <Link to="/login">
      <li>Login</li>
    </Link>
  );

  const handleLogout = () => {
    axios.post('/logout').then((res) => {
      setUser((prev) => ({
        ...prev,
        auth: res.data.auth,
      }));
    });
  };

  const LogoutButton = () => (
    <Link to="/logout">
      <li>Logout</li>
    </Link>
  );

  return (
    <nav className={className}>
      <div id="nav-flexbox">
        <Link to="/" id="logo-link">
          <div id="logo">Café Finder</div>
        </Link>

        <ul>
          <Link to="/favourites">
            <li>Favourites</li>
          </Link>
          {user.auth ? LogoutButton() : LoginButton()}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
