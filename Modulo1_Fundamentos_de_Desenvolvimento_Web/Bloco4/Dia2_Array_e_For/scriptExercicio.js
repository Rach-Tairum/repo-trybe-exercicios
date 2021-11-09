// Exercicios de Arrays e For

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers){
    console.log(number);
}

/* Para o segundo exercício, some todos os valores contidos no array e imprima o resultado */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var somafinal = 0;

for (soma = 0; soma < numbers.length; soma += 1) {
    somafinal = somafinal + numbers [soma];    
}
console.log (somafinal);

/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var somafinal = 0;

for (soma = 0; soma < numbers.length; soma += 1) {
    somafinal = somafinal + numbers [soma];    
}
let media = somafinal/numbers.length

console.log (media);

/* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20" */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var somafinal = 0;

for (soma = 0; soma < numbers.length; soma += 1) {
    somafinal = somafinal + numbers [soma];    
}
let media = somafinal/numbers.length

if (media > 20) {
    console.log ('valor maior que 20.' + ' ' + 'Valor igual a: ' + media);
} else {
    console.log ('valor menor que 20.' + ' ' + 'Valor igual a: ' + media)
}

/* Utilizando for , descubra qual o maior valor contido no array e imprima-o */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highNumber = numbers [0]

for (let i = 1; i < numbers.length; i += 1){
    if (numbers [i] > highNumber){
        highNumber = numbers [i];
    }  
}
console.log (highNumber);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let eImpar = [];

for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0) {
        eImpar.push (numbers[index])
    } 
}

if (eImpar !== []){
    console.log (eImpar.length);
} else {
    console.log ('nenhum valor ímpar encontrado')
}

/* Utilizando for , descubra qual o menor valor contido no array e imprima-o */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smalValue = numbers [0];

for (index = 1; index < numbers.length; index += 1){
    if (numbers [index] < smalValue) {
        smalValue = numbers [index];
    }
}
console.log (smalValue);


/* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado */
let contagem = [];

for (i = 0; i <= 25; i += 1){
    contagem.push (i)
}

console.log (contagem);

/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

let divisao = [];

for (i = 0; i < contagem.length; i += 1){
    divisao.push (contagem[i] / 2);
}

console.log (divisao);


// Bonus

/* Ordene o array numbers em ordem crescente e imprima seus valores;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index += 1){
    for (index2 = 0; index2 < index; index2 += 1){
        if (numbers[index] < numbers[index2]){
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}

console.log (numbers);

/* Ordene o array numbers em ordem decrescente e imprima seus valores */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index += 1){
    for (index2 = 0; index2 < index; index2 += 1){
        if (numbers[index] > numbers[index2]){
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}
console.log (numbers)

/* Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];

for (index = 1; index < numbers.length; index += 1){
    if (index + 1 < numbers.length){
        multiplicado.push (numbers[index] * numbers[index + 1]);
    } else {
        multiplicado.push (numbers[index] * 2)
    }
}
console.log (multiplicado);