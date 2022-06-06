SELECT * FROM sakila.customer;
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM sakila.customer 
WHERE active IS FALSE 
AND store_id = 2 
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM sakila.film 
WHERE (rating = 'G' 
OR rating = 'PG'
OR rating = 'PG-13')
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title ASC 
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer WHERE active IS TRUE;
SELECT * FROM sakila.customer WHERE active IS NOT TRUE AND store_id = 1;
SELECT * FROM sakila.film WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50;