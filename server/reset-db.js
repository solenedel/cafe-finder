// TO RESET THE DATABASE: npm run db:reset from the root directory

const path = require('path');

// load .env data into process.env

// specify path to the .env file since it is not in the root directory
const dotenvPath = path.join(__dirname, '..', '.env');
require('dotenv').config({ path: dotenvPath });

// other dependencies
const fs = require('fs');
const chalk = require('chalk');
const { Pool } = require('pg');
const dbParams = require('./db/dbParams');

// PG connection setup
const db = new Pool(dbParams);
db.connect();

let sql = fs.readFileSync('./db/schema.sql', 'utf8');
db.query(sql)
  .then(() => {
    sql = fs.readFileSync('./db/seeds.sql', 'utf8');
    return db.query(sql);
  })
  .then(() => {
    console.log(chalk.green('Database reset: success!'));
    process.exit(0);
  })
  .catch((err) => {
    console.error(chalk.red(`Database reset: failed due to error: ${err}`));
    process.exit(1);
  });
