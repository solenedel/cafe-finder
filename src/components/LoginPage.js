import axios from 'axios';
import React, { useState } from 'react';

// eslint-disable-next-line
const LoginPage = ({ className }) => {
  const [email, setEmail] = useState('');

  // form submission to login
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/login', { email }).then((res) => {
      console.log('res: ', res);
    });
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
            // value={password}
            // required
            // onChange={(e) => setPassword(e.target.value)}
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
