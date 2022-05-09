SELECT act.actor_id, CONCAT(act.first_name, ' ', act.last_name), film.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film
ON act.actor_id = film.actor_id;

SELECT staff.first_name, staff.last_name, ad.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS ad
ON staff.address_id = ad.address_id;

SELECT c.customer_id, c.first_name, c.last_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, a.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address)
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;

SELECT staff.first_name, staff.last_name, AVG(p.amount)
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS p
ON staff.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY staff.first_name, staff.last_name;

SELECT fa.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.film_actor AS fa
INNER JOIN sakila.actor AS a ON fa.actor_id = a.actor_id
INNER JOIN sakila.film AS f ON fa.film_id = f.film_id;