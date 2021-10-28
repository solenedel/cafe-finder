import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../context';

// eslint-disable-next-line
const Nav = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;
  const history = useHistory();

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
      console.log(`User logged out`);
    });
    history.push('/login');
  };

  const LogoutButton = () => {
    return (
      <>
        {/* eslint-disable-next-line */}
        <li onClick={handleLogout}>Logout</li>
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
