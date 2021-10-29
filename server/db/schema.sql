-- TO DO
-- add thumbnail images, address (and website link?) to cafes table
-- also add an "open now" field and use datetime to style ths 
-- cafe according to if it's open or not

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cafes CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

-- logged in users have more features available
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL,
  password VARCHAR(60) NOT NULL
);

CREATE TABLE cafes (
  id SERIAL PRIMARY KEY NOT NULL,
  cafe_name VARCHAR(255) NOT NULL,
  has_wifi BOOLEAN,
  is_open_24_hours BOOLEAN,
  has_organic_tea_coffee BOOLEAN,
  noise_level INTEGER,
  seating_space INTEGER, 
);
-- NOTE: noise_level and seating_space are integers from 1 to 5 (stars system)

-- Join table: many to many (many users can have many favourite cafes)
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  cafe_id INTEGER REFERENCES cafes(id) ON DELETE CASCADE
);


-- use knex for queries ?
-- database is not === results returned by google. 
-- Only save a cafe to the database if:
-- at least one user has favorited the cafe, or it has received some user rating (ex. noise level)
