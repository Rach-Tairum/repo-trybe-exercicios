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
        
        for (i = n; i > 0; i -= 1){
            let espacos = '';
            espacos = '_ ';
        }

    console.log (espacos + asteristicos);
}


/* 4- Depois, faça uma pirâmide com n asteriscos de base: */

let n = 5;
let asteristicos = '';

for (i = 0; i <= n; i += 1){

    if (i % 2 === 0) {
        console.log ('_')
    } else{
        
    }
    
}