USE sakila;
SELECT * FROM actor;
SELECT * FROM film;
SELECT * FROM film_actor;
SELECT * FROM inventory WHERE film_id = 1001;
SELECT * FROM customer;
SELECT * FROM address;

INSERT INTO actor (first_name, last_name)
VALUES ('KEANU', 'REVEES'), ('Carrie-Anne','Moss');

INSERT INTO film (title, description, release_year, language_id)
VALUES ('Matrix 4', 'New Matrix movie, revivel', 2021, 1);

INSERT INTO film_actor (actor_id, film_id)
SELECT actor_id, film_id FROM actor, film WHERE first_name = 'KEANU' AND title = 'Matrix 4';

INSERT INTO inventory (film_id, store_id)
SELECT film_id, store_id FROM film, store WHERE title = 'Matrix 4' AND store_id = 1;

DELETE FROM inventory WHERE inventory_id BETWEEN 4583 AND 4585;

INSERT INTO customer (store_id, first_name, last_name, email, address_id, `active`)
VALUES (2, 'RACHEL', 'TAIRUM', 'rachel_tairum@sakilacustomer.org', 20, 1),
(1, 'FABIO', 'SABAH', 'fabio_sabah@sakilacustumer.org', 21, 1);

SELECT * FROM rental order by rental_id DESC limit 10;
INSERT INTO rental (rental_date, inventory_id, customer_id, staff_id)
VALUES ('2022-04-25 12:18:00', 4582, 600, 2);

UPDATE rental 
SET rental_date = '2022-04-25 12:15:00'
WHERE rental_id = 16052;