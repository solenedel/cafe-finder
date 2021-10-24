-- seeds for users table

INSERT INTO users (username, email)
VALUES ('Gary', 'gary@mail.com');

INSERT INTO users (username, email)
VALUES ('Nally', 'nally@mail.com');

INSERT INTO users (username, email)
VALUES ('Andy', 'andy@mail.com');

INSERT INTO users (username, email)
VALUES ('James', 'james@mail.com');


-- seeds for cafes table
-- NOTE: these cafes are fake (ie not returned from the Google places API)

INSERT INTO cafes (cafe_name, has_wifi, is_open_24_hours, has_organic_tea_coffee, noise_level, seating_space)
VALUES ('The Fake Café', true, false, true, 3, 4);

INSERT INTO cafes (cafe_name, has_wifi, is_open_24_hours, has_organic_tea_coffee, noise_level, seating_space)
VALUES ('Le Faux Café', false, true, true, 5, 2);

INSERT INTO cafes (cafe_name, has_wifi, is_open_24_hours, has_organic_tea_coffee, noise_level, seating_space)
VALUES ('El Café Falso', true, false, false, 1, 1);


-- seeds for favorites table

INSERT INTO favorites (user_id, cafe_id)
VALUES (1, 2);

INSERT INTO favorites (user_id, cafe_id)
VALUES (2, 3);

INSERT INTO favorites (user_id, cafe_id)
VALUES (4, 1);