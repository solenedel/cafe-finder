// -------------------------- search route ----------------------------- //

// This route uses the Google Places API to search for cafes in a location specified by the user

const express = require('express');
require('dotenv').config();

// eslint-disable-next-line
const router = express.Router();
const axios = require('axios');

// helper: make request to Google Places API
const cafeSearchHelper = (location) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafes%20in%20${location}&key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => console.log(res.data.results[0].name))
    .catch((error) => error.message);
};

// initialise router for get /api/search
// eslint-disable-next-line
router.get('/', (req, res) => {
  const { location } = req.query;

  if (!location) {
    console.log('user did not enter any location');
    return res.json([]);
  }
});

module.exports = { cafeSearchHelper, router };
