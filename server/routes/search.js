// -------------------------- search route ----------------------------- //

// This route uses the Google Places API to search for cafes in a location specified by the user
const express = require('express');
require('dotenv').config();

// eslint-disable-next-line
const router = express.Router();
const axios = require('axios');

// helper: make request to Google Places API
const cafeSearchHelper = (location) => {
  return (
    axios
      // .get(
      //   `https://maps.googleapis.com/maps/api/place/textsearch/json
      // ?query=cafes%20in%20${location}
      // &key=${process.env.REACT_APP_API_KEY}`
      // )
      .get(
        'https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafes%20in%20vancouver&key=AIzaSyAq-xM4WyyvXIKjh0wKh8CMDyRI2iOPvmo'
      )
      .catch((error) => error.message)
  );
};

// TO DO: debug , api key undefined
// console.log(process.env.REACT_APP_API_KEY);
// console.log('process.env', process.env);

module.exports = { cafeSearchHelper };
