/* MEnsagem codificada */
let string ='Trybe';
let stringNumber = '';
for (let i = 0; i < string.length; i += 1){
    stringNumber = stringNumber + (i * 3);
}

console.log (stringNumber);

/* Calcular soma de 2 até 1.000 */

let sum = 0;
let final = 1000;

for(let i = 1; i<= final; i += 1){
    sum = sum + i;
}

console.log (sum);

/* Escreva seu nome n vezes */

let yourName = 'Seu Nome';
let n = 20;

for (i = 0; i <= n; i += 1) {
    console.log (yourName);
}

/* Números entre 2 e 150 que são divisiveis por 3 */

soma = 0;

for (let index = 2; index <= 150; index += 1) {
    if (index % 3 == 0) {
        soma += 1;
    }
}

if ( soma === 50){
    console.log ('mensagem secreta')
} else {
    console.log ('valor foi maior ou menor que 50')
}