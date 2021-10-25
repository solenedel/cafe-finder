// --------------------------- Express server ------------------------------ //

const express = require('express');
// const { cafeSearchHelper } = require('./routes/searchRouter');
// const axios = require('axios');

const dotenvPath = '../.env';
require('dotenv').config({ path: dotenvPath });

// Express configuration
const app = express();
const PORT = 8081;

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db/dbParams');

// create new connection pool and connect to it
const db = new Pool(dbParams);
db.connect(() => console.log('✅ connected to db'));

// test query:
db.query('SELECT * FROM users;').then((data) => console.log(data.rows));

// -------------------- Login / logout routes -------------------- //

// start listening for requests
app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);

  // cafeSearchHelper('Vancouver');
});
