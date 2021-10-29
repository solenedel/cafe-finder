-- seeds for users table

INSERT INTO users (username, email, password)
VALUES ('Gary', 'gary@mail.com', '$2b$10$XElmipvvwT8V5/.NsZ1FX.5QSFClu.0396xRYeoUhBL2Dmh84Uq1O');

INSERT INTO users (username, email, password)
VALUES ('Andy', 'andy@mail.com', '$2b$10$ea.LB7u5eUcA5QuL5dOlDeK4G00TN1r3MbwZrIwrB.BKQWpPCrpKO');

INSERT INTO users (username, email, password)
VALUES ('Nally', 'nally@mail.com', 'password');

INSERT INTO users (username, email, password)
VALUES ('James', 'james@mail.com', 'password');


-- seeds for cafes table
-- NOTE: these cafes are fake (ie not returned from the Google places API)

INSERT INTO cafes (cafe_name, has_wifi, is_open_24_hours, has_organic_tea_coffee, noise_level, seating_space)
VALUES ('The Fake Café', true, false, true, 3, 4);

INSERT INTO cafes (cafe_name, has_wifi, is_open_24_hours, has_organic_tea_coffee, noise_level, seating_space)
VALUES ('The Database Café', false, true, true, 5, 2);

INSERT INTO cafes (cafe_name, has_wifi, is_open_24_hours, has_organic_tea_coffee, noise_level, seating_space)
VALUES ('Unreal Café', true, false, false, 1, 1);


-- seeds for favorites table

-- user 1 is Gary (main demo user)

INSERT INTO favorites (user_id, cafe_id)
VALUES (1, 1);

INSERT INTO favorites (user_id, cafe_id)
VALUES (1, 2);

INSERT INTO favorites (user_id, cafe_id)
VALUES (1, 3);

INSERT INTO favorites (user_id, cafe_id)
VALUES (2, 3);

INSERT INTO favorites (user_id, cafe_id)
VALUES (4, 1);