// --------------------------- Express server ------------------------------ //

const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');
const bcrypt = require('bcrypt');
// const { cafeSearchHelper } = require('./routes/searchRouter');
// const axios = require('axios');

const dotenvPath = '../.env';
require('dotenv').config({ path: dotenvPath });

// PG database client/connection setup
const { Pool } = require('pg');
// const { Data } = require('@react-google-maps/api');
const dbParams = require('./db/dbParams');

const db = new Pool(dbParams);
db.connect(() => console.log('✅ connected to db'));

// Express configuration
const app = express();
const PORT = 8081;
app.use(express.urlencoded({ extended: true }));
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

/* HASH FUNCTION: store hashed pw in database
bcrypt.hash('ENTER PASSWORD', 10, (err, hash) => {
  if (err) console.log(err);
  console.log('hash: ', hash);
});
*/

// -------------------- Login / logout routes -------------------- //

// GET: login page
app.get('/login', (req, res) => {
  if (!req.session || !req.session.user) {
    res.json({ auth: false });
  } else {
    const text = 'SELECT username FROM users WHERE id = $1';
    const values = [req.session.user];
    db.query(text, values).then((data) => {
      res.json({ auth: true, username: data.rows[0].username });
    });
  }
});

// POST: login page
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const queryText = 'SELECT password, id, username FROM users WHERE email = $1';
  const values = [email];

  // query the database
  db.query(queryText, values)
    .then((data) => {
      if (data.rows.length > 0) {
        // check password against database
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          req.session.user = data.rows[0].id;
          res.json({ auth: true, username: data.rows[0].username });
          console.log(`🔐 password correct: ${data.rows[0].username} has logged in`);
        } else {
          console.log(`❌ Incorrect password for ${data.rows[0].username}`);
        }
      } else {
        throw new Error(`❌ invalid email: ${email}`);
      }
    })
    .catch((err) => {
      req.session = null;
      console.log('res.json: ', res.json);
      console.log('ERROR: ', err);
    });
});

// POST: logout page
app.post('/logout', (req, res) => {
  console.log('user logged out');

  // clear session cookies:
  req.session = null;
  res.json({ auth: false });
});

// -------------------- Favourites routes -------------------- //

// GET: favourites page (shows list of user's favs)
app.get('/favourites', (req, res) => {
  if (req.session || req.session.user) {
    const text = `SELECT favorites.*, users.id, users.username FROM favorites
                  JOIN users ON users.id = user_id
                  WHERE user_id = $1;`;
    const values = [req.session.user];
    db.query(text, values)
      .then((results) => {
        console.log(results.rows);
        return res.status(200).send({
          results: results.rows,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json([]);
      });
  }
});

// start listening for requests
app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);

  // cafeSearchHelper('Vancouver');
});
