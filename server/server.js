// --------------------------- Express server ------------------------------ //

const express = require('express');
const { cafeSearchHelper } = require('./routes/searchRoutes');

const dotenvPath = '../.env';
require('dotenv').config({ path: dotenvPath });

// Express configuration
const app = express();
const PORT = 8081;

// import external routes from routes/index.js
const { searchRouter } = require('./routes/index');

// use routers
app.use('/api/search', searchRouter());

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);

  cafeSearchHelper('Vancouver');
});
