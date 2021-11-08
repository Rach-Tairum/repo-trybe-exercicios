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

const e = 150;
const f = 10;
const g = 100;

if (e > f && e > g) {
    console.log ('o maior número é:' + e + ' ' + '(e)');
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

const ang1 = 80;
const ang2 = 50;
const ang3 = 50;

var triangulo = ang1 + ang2 + ang3;

if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
    if (triangulo === 180){
        console.log ('true')
    } else {
        console.log ('false')
    }
} else {
    console.log ('Erro: Ângulos inválidos (angulo negativo)')
}

/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */   
var pecaDeXadrez = 'bispo';

switch (pecaDeXadrez.toLowerCase()){ 
    case 'peao':
        console.log ('O Peão se move uma casa a frente, uma casa cada vez');
    break;

    case 'bispo':
        console.log ('O Bispo se move em diagonal');
    break;

    case 'cavalo':
        console.log ('O Cavalo se move em L, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
    break;

    case 'torre':
        console.log ('A Torre se move na vertical ou horizontal');
    break;

    case 'rainha':
        console.log ('A Rainha se move em todas as direções');
    break;

    case 'rei':
        console.log ('O Bispo se move em todas as direções, uma casa cada vez');
    break;

    default:
        console.log ('Não é uma peça de xadrez');
    break;
}

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.*/

var notaDaProva = 60;

if (notaDaProva >= 90){
        notaDaProva = 'A';
        console.log (notaDaProva);
} else if (notaDaProva >= 80 && notaDaProva < 90) {
        notaDaProva = 'B';
        console.log (notaDaProva);
} else if (notaDaProva >= 70 && notaDaProva < 80) {
        notaDaProva = 'C';
        console.log (notaDaProva);
} else if (notaDaProva >= 60 && notaDaProva < 70) {
    notaDaProva = 'D';
        console.log (notaDaProva);
} else if (notaDaProva >= 50 && notaDaProva < 60){
    notaDaProva = 'E';
        console.log (notaDaProva);
} else if (notaDaProva < 50) {
    notaDaProva = 'F';
        console.log (notaDaProva);
} else if (notaDaProva > 100 || notaDaProva < 0) {
    console.log ('Nota Inválida')
}

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .*/

const a = 3;
const b = 4;
const c = 6;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log ('true')
} else {
    console.log ('false')
}

/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .*/

const a = 3;
const b = 4;
const c = 6;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    console.log ('true')
} else {
    console.log ('false')
}

/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.*/

const receita = 1000;
const custo = 200;
let imposto = (custo * 0.2);

if (custo >= 0 && receita >= 0){
    var custoReal = custo + imposto;
    var lucro = receita - custoReal;
    console.log (lucro)
} else {
    console.log ('Erro: Custo ou Receita com valor menor que 0');
}

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.*/

const salarioBruto = 6000;
let salarioBase;
let salarioLiquido;

// INSS
if (salarioBruto <= 1556.94) {
   salarioBase = salarioBruto - (salarioBruto * 0.08); 
   console.log (salarioBase);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09);
    console.log (salarioBase);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 0.11);
    console.log (salarioBase);
} else {
    salarioBase = salarioBruto - 570.88
    console.log (salarioBase);
}

// imposto de renda (IR)

const parcelaFaixa2 = 142.80;
const parcelaFaixa3 = 354.80;
const parcelaFaixa4 = 636.13;
const parcelaFaixa5 = 869.36;

if (salarioBase <= 1903.98) {
    console.log ('Isento de IR, Salario Líquido = Salario Base')
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    var IR = (salarioBase * 0.075) - parcelaFaixa2;
    salarioLiquido = salarioBase - IR;
    console.log (salarioLiquido);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05){
    var IR = (salarioBase * 0.15) - parcelaFaixa3;
    salarioLiquido = salarioBase - IR;
    console.log (salarioLiquido);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    var IR = (salarioBase * 0.225) - parcelaFaixa4;
    salarioLiquido = salarioBase - IR;
    console.log (salarioLiquido);
} else {
    var IR = (salarioBase * 0.275) - parcelaFaixa5;
    salarioLiquido = salarioBase - IR;
    console.log (salarioLiquido);
}