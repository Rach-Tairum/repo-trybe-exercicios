SELECT CONCAT(first_name, last_name) FROM sakila.actor;

-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.

SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;

-- Muito melhor, certo? Mas dá para melhorar? Dá!

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;

SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;