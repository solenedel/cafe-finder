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
const dbParams = require('./db/db-params');

/*
// ------------------------ search routes ------------------------- //

// helper: make request to Google Places API
const cafeSearchHelper = (location) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafes%20in%20${location}&key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => res.data)
    .catch((error) => error.message);
};

// GET: /api/search

app.get('/api/search', (req, res) => {
  // const { location } = req.query;
  const location = 'Vancouver';

  if (!location) {
    res.json([]);
    return 'user did not enter any location';
  }

  // make api calls to search for cafes
  cafeSearchHelper(location)
    .then((data) => {
      const cafeResultsList = data.results.map((cafe) => {
        return axios.get(
          `https://maps.googleapis.com/maps/api/place/${cafe.place_id}&key=${process.env.REACT_APP_API_KEY}`
        );
      });
      return Promise.all(cafeResultsList);
    })
    .then((response) => {
      // filter results
      const parsedData = response.map((r) => {
        console.log('RESULT ------ : ', r);
        return {
          id: r.data.place_id,
          name: r.data.name,
          location: r.data.location,
        };
      });
      res.json(parsedData);
    })
    .catch((error) => console.log('ERROR: ', error));
}); */

// start listening for requests
app.listen(PORT, () => {
  console.log(` ✅ Express is listening on port ${PORT}`);

  // cafeSearchHelper('Vancouver');
});
