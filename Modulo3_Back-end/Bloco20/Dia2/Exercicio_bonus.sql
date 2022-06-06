-- Bonus
SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
SELECT DISTINCT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;