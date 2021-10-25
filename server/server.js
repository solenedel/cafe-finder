// --------------------------- Express server ------------------------------ //
const express = require('express');
const { cafeSearchHelper } = require('./routes/search');

require('dotenv').config();

// Express configuration
const app = express();
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);

  cafeSearchHelper('Vancouver').then((res) => console.log(res.data.results.length));
});
