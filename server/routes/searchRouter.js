// // -------------------------- search route ----------------------------- //

// // This route uses the Google Places API to search for cafes in a location specified by the user

// const express = require('express');
// require('dotenv').config();

// // eslint-disable-next-line
// const router = express.Router();
// const axios = require('axios');

// // helper: make request to Google Places API
// const cafeSearchHelper = (location) => {
//   return axios
//     .get(
//       `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafes%20in%20${location}&key=${process.env.REACT_APP_API_KEY}`
//     )
//     .then((res) => console.log(res.data))
//     .catch((error) => error.message);
// };

// app.get('/api/search', (req, res) => {
//   const { location } = req.query;

//   if (!location) {
//     console.log('user did not enter any location');
//     res.json([]);
//   }

//   // make api calls to search for cafes
//   cafeSearchHelper(location)
//     .then((data) => {
//       const cafeResultsList = data.results.map((cafe) => {
//         axios.get(
//           `s://maps.googleapis.com/maps/api/place/${cafe.place_id}&key=${process.env.REACT_APP_API_KEY}`
//         );
//         console.log('place_id: ', cafe.place_id);
//         return Promise.all(cafeResultsList);
//       });
//     })
//     .then((response) => {
//       // if filtering of results needs to happen, do it here.
//       console.log('response: ', response);
//     })
//     .catch((error) => error.message);
// });

// module.exports = { cafeSearchHelper, router };
