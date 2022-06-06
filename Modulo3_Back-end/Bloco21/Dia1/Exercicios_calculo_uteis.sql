SELECT AVG(length) AS  'Média de Duração', 
	MIN(length) AS 'Duração Mínima', 
	MAX(length) AS 'Duração Máxima', 
	SUM(length) AS 'Tempo de Exibição Total',
	COUNT(length) AS  'Filmes Registrados' 
FROM sakila.film;

-- exercicio de aula
-- Qual o valor total recebido dentro de cada mês? 

SELECT MONTH(payment_date) AS mes_pago,
       YEAR(payment_date),
	   SUM(amount) AS valores
        FROM sakila.payment
GROUP BY YEAR(payment_date), MONTH(payment_date);