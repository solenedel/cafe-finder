// --------------------------- Express server ------------------------------ //
const express = require('express');

// Express configuration
const app = express();
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});
