// --------------------------- Express server ------------------------------ //

const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');
// const { cafeSearchHelper } = require('./routes/searchRouter');
// const axios = require('axios');

const dotenvPath = '../.env';
require('dotenv').config({ path: dotenvPath });

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db/dbParams');

const db = new Pool(dbParams);
db.connect(() => console.log('✅ connected to db'));

// test query:
// db.query('SELECT * FROM users;').then((data) => console.log(data.rows));

// Express configuration
const app = express();
const PORT = 8081;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create keys for cookies
const key1 = process.env.COOKIE_KEY_1;
const key2 = process.env.COOKIE_KEY_2;
const key3 = process.env.COOKIE_KEY_3;

// set up cookies and user sessions
app.use(
  cookieSession({
    name: 'session',
    keys: [key1, key2, key3],
    // cookie expires after 24 hours
    maxAge: 24 * 60 * 60 * 1000,
  })
);

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// -------------------- Login / logout routes -------------------- //

app.post('/login', (req, res) => {
  const { email } = req.body;
  const queryText = 'SELECT id, username FROM users WHERE email = $1';
  const values = [email];

  // query the database
  db.query(queryText, values, (err, result) => {
    if (err) res.send({ err });
    if (result) {
      res.send(result);
    } else {
      res.send({ message: 'wrong email' });
    }
  });
  // .then((data) => {
  //   if (data.rows.length > 0) {
  //     if (email === data.rows[0].email) {
  //       console.log('email is a match');
  //       res.json({ username: data.rows[0].username });
  //     } else {
  //       console.log('email not found');
  //     }
  //   }
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
});

// ---------------------------------------------------------------- //

// start listening for requests
app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);

  // cafeSearchHelper('Vancouver');
});
