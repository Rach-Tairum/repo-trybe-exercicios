/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.*/

const a = 50;
const b = 10;

    // Adição
var resultado1 = a + b;
console.log (resultado1);

    // Subtração
var resultado2 = a - b;
console.log (resultado2);

    // Multiplicação
var resultado3 = a * b;
console.log (resultado3);

    // Divisão
var resultado4 = a / b;
console.log (resultado4);

    // Módulo
var resultado5 = a % b;
console.log (resultado5);

/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.*/

const c = 50;
const d = 10;

if (c > d) {
    console.log (c);
} else {
    console.log (d);
}

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

const e = 50;
const f = 10;
const g = 100;

if (e > f && e > g) {
    console.log (e);
} else if (f > e && f > g) {
    console.log (f);
} else if (g > e && g > f) {
    console.log (g);
}

/* Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

const h = 100;

if (h > 0) {
    console.log ('positive');
} else if (h < 0) {
    console.log ('negative');
} else {
    console.log ('zero');
}

/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */


    
