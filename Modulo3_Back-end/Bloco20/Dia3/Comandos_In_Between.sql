SELECT first_name, last_name, email FROM sakila.customer 
WHERE last_name 
IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT first_name, last_name, email FROM sakila.customer 
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY first_name;

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01 00:00:00' AND '2005-08-01 23:59:59';

SELECT * FROM sakila.actor
WHERE (first_name LIKE 'B%') OR (first_name LIKE 'D%') ORDER BY first_name;

SELECT * FROM sakila.actor
WHERE first_name BETWEEN 'B' AND 'E' ORDER BY first_name;