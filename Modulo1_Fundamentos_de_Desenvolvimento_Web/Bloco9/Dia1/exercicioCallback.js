/* 1 - Adicione uma callback como parâmetro da funcão getUser .
No código abaixo você tem a função getUser , que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
Insira o retorno da função getUser ;

 - Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
 - Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".
*/

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn)
};

console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

/* 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser .

No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:

 - Insira uma callback como parâmetro da função getUser ;
 - Retorne a callback passada como parâmetro na função getUser ;
*/
const userFullName1 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality1 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser1 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
};

getUser1(userFullName1); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser1(userNationality1); // deve imprimir "Ivan is Russian" depois de um certo tempo

