USE `store-sample`;

-- Busque todos os nomes das pessoas que possuem pedidos realizados e 
-- as pessoas funcionárias que fizeram a operação e a empresa associada 
-- para o envio do produto 

SELECT o.OrderID, c.CustomerName, e.FirstName, s.ShipperName
FROM orders AS o
INNER JOIN customers AS c ON o.CustomerID = c.CustomerID
INNER JOIN employees AS e ON o.EmployeeID = e.EmployeeID
INNER JOIN shippers AS s ON o.ShipperID = s.ShipperID;

-- Retorne o CustomerName e OrderID de todas os 
-- customers mesmo que nunca tenha sido feita uma compra 

SELECT o.OrderID, c.CustomerName
FROM orders AS o
RIGHT JOIN customers AS c ON o.CustomerID = c.CustomerID;

-- Retorne o OrderID, Employees LastName e FistName de TODOS os employees, 
-- mesmo que não haja nenhuma venda (order) 

SELECT o.OrderID, e.LastName, e.FirstName
FROM employees AS e
LEFT JOIN orders AS o
ON e.EmployeeID = o.EmployeeID;

