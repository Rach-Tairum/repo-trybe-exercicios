/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .*/

let n = 5;
let linha = '';

for (i = 0; i <= n; i += 1){
    linha += '*';
}
for (i = 0; i <= n; i += 1) {
    console.log (linha)
}


/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.*/

let n = 5;
let asteristicos = '';

for (i = 0; i <= n; i += 1){
    asteristicos += '*';
    console.log (asteristicos);
}

/* 3- Agora inverta o lado do triângulo.*/

let n = 5;
let asteristicos = '';

for (index = 0; index <= n; index += 1){
    asteristicos += '*';
    let espacos = '';

    for (i = index; i < n; i += 1){
        espacos += ' ';
    }

    console.log (espacos + asteristicos);
}


/* 4- Depois, faça uma pirâmide com n asteriscos de base: */

let n = 1;
let asteristicos = '*';
console.log (' ' + ' ' + ' ' + asteristicos);

for (index = 0; index <= n; index += 1){
    let espacos = '';

    for (i = index; i <= n; i += 1){
        espacos += ' ';
    }
    asteristicos += '*';
    asteristicos += '*';
    console.log (espacos + asteristicos);
}

/* Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero */

let n = 4;
let array =[];

for (i = 1; i <= n; i += 1){
    let divisao = n % i;
    
    if (divisao === 0){
        array.push (i);
    }
}

if (array.length === 2) {
    console.log ('Esse número: ' + n + ' é primo.');
} else {
    console.log ('Esse número: ' + n + ' não é primo.')
}