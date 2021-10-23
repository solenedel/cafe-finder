DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cafes CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

-- logged in users have more features available
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL,
  password VARCHAR(60) NOT NULL,
);

CREATE TABLE cafes (
  id SERIAL PRIMARY KEY NOT NULL,
  cafe_name VARCHAR(255) NOT NULL,
  has_wifi BOOLEAN,
  open_24_hours BOOLEAN,
  organic_tea_coffee BOOLEAN,
  noise_level INTEGER,
  seating_space INTEGER,
);
-- NOTE: noise_level and seating_space are integers from 1 to 5 (stars system)

-- Join table: many to many (many users can have many favourite cafes)
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  cafe_id INTEGER REFERENCES cafes(id) ON DELETE CASCADE,
);
