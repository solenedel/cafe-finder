import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../context';

// eslint-disable-next-line
const LoginPage = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userContext } = useAppContext();
  // eslint-disable-next-line
  const [user, setUser] = userContext;
  const history = useHistory();
  // form submission to login
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/login', { email, password }).then((res) => {
      console.log('response', res);
      setUser((prev) => ({
        ...prev,
        auth: res.data.auth,
        username: res.data.username,
      }));

      // set fields back to blank input
      setEmail('');
      setPassword('');
    });
    history.push('/'); // redirect to home page after login
  };

  return (
    <main className={className} id="login-page-container">
      <p>Login</p>
      <div id="no-account">
        Don&rsquo;t have an account? Sign up <a href="/signup">here!</a>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="email-input">
          <i className="far fa-envelope" />
          <input
            className="login-inputs"
            placeholder="email"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-input">
          <i className="fas fa-key" />
          <input
            className="login-inputs"
            placeholder="password"
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
