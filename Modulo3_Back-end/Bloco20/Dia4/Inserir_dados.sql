USE sakila;
SELECT * FROM staff;
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');
SELECT * FROM actor;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`) VALUES
('Monica', 'Sousa', 3, 'monica.35@sakilastaff.com', 1, 1, 'Moniquinha', 12345678),
('Cebolia', 'Espeto', 4, 'cebolinha.100@sakilastaff.com', 2, 1, 'Cebolinha', 12345678910);
INSERT INTO actor (first_name, last_name) SELECT first_name, last_name FROM customer LIMIT 5;
SELECT * FROM category;
INSERT INTO category (`name`) VALUES ('Romance'),('Historical'),('Super_Hero');
SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id) VALUES (3, 3);