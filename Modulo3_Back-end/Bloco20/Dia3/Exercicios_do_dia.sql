-- exercicio 1
SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'gr%';
-- exercicio 2
SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;
-- exercicio 3
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';
-- exercicio 4
SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;
-- exercicio 5
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores WHERE code LIKE '%F%';
-- exercicio 6
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco ASC;
-- exercicio 7
SELECT COUNT(*) FROM PecasFornecedores.Vendas 
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';