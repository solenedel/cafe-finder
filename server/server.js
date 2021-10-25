// --------------------------- Express server ------------------------------ //
const express = require('express');
const { cafeSearchHelper } = require('./routes/search');

const dotenvPath = '../.env';
require('dotenv').config({ path: dotenvPath });

// Express configuration
const app = express();
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
  cafeSearchHelper('vancouver');
});
