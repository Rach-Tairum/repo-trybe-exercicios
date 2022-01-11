/* Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.*/

const sum = (...numbers) => numbers.reduce((acc, elemento) => acc + elemento);

console.log(sum(1, 2, 3, 4, 10, 50, 90))