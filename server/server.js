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

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const queryText = 'SELECT password, id, username FROM users WHERE email = $1';
  const values = [email];

  // query the database
  db.query(queryText, values)
    .then((data) => {
      if (data.rows.length > 0) {
        // check password

        if (bcrypt.compareSync(password, data.rows[0].password)) {
          console.log('🔐 password correct: login successful');
        } else {
          console.log('🔐 PASSWORD INCORRECT');
        }
      } else {
        console.log(`invalid email: ${email}`);
        throw new Error(`invalid email: ${email}`);
      }
    })
    .catch((err) => {
      console.log('res.json: ', res.json);
      console.log('ERROR: ', err);
    });
});

// ---------------------------------------------------------------- //

// start listening for requests
app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);

  // cafeSearchHelper('Vancouver');
});
