-- 1) Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT M.title, B.domestic_sales, B.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id;

-- 2) Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT M.title, (B.domestic_sales + B.international_sales) AS 'sales' 
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- 3) Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT M.title, B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- 4) Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.id, T.`name`, T.location, M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.`name`;

-- 5) Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT M.title, M.director, M.year, M.length_minutes, T.id, T.`name`, T.location
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.`name`;

-- BÔNUS
-- 6) Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT M.title, M.director, M.year, M.length_minutes, T.`name`, T.location
FROM Pixar.Movies AS M 
INNER JOIN Pixar.Theater AS T
ON T.id = M.theater_id
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE B.rating > 8;
