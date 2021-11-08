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

