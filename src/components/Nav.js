import React, { useEffect } from 'react';
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

  const LogoutButton = () => {
    return (
      <>
        {/* eslint-disable-next-line */}
        <li className="desktop-menu-item" onClick={handleLogout}>{user.username}</li>
      </>
    );
  };

  // set user on login
  useEffect(() => {
    axios.get('/login').then((res) => {
      setUser((prev) => ({
        ...prev,
        auth: res.data.auth,
        username: res.data.username,
      }));
    });
  }, []);

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
