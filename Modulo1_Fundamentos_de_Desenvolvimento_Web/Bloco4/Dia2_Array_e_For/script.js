// Criando um Array e vendo seu tamanho
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);

console.log(tasksList[tasksList.length - 1]) // exibe o ultimo item da lista do array independente de seu comprimento

let searchForFirstTask = tasksList[0]; // exibe o primeiro termo da lista
console.log(searchForFirstTask);

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa ao fim da lista
console.log(tasksList);

tasksList.unshift('Acordar');  // adiciona mais uma tarefa no inicio da lista
console.log (tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift(); //remove a primeira tarefa tarefa
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião'); // busca o indice de um termo no array
console.log(indexOfTask);


// Exercícios de Arrays

/* Obtenha o valor "Serviços" do array menu : */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let menuServices = menu[1]

console.log(menuServices);

/* Procure o índice do valor "Portfólio" do array menu : */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/* Adicione o valor "Contato" no final do array menu : */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ('Contato')

console.log(menu);


// FOR

var numero = 9;

for (var contador = 1; contador <= 9; contador ++) {
    console.log (' ');
    console.log (contador * numero);
}

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

console.log (typeof index)

// Exercício

/* Utilize o for para imprimir os elementos da lista groceryList com o console.log()*/

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let listaAlfabetica = groceryList.sort();

for(var listaCompras = 0; listaCompras < listaAlfabetica.length; listaCompras += 1) {
    console.log (listaAlfabetica [listaCompras]);
}

// FOR / OF

let word = 'Hello';
for (let letter of word) {
  let separacao = letter;
  console.log(separacao);
}

// Exercicio

/* Utilize o for/of para imprimir os elementos da lista names com o console.log() : */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let listaNomes of names) {
    console.log (listaNomes);
}

// letras separadas dentro de um array

let word = 'Hello';

for (i = 0; i < word.length; i += 1) {
    let letras = [];
    letras.push(word [i]);
    console.log (letras);
}