// Exemplo 1

function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();

  function userInfo1() {
    var userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo1();

  function userInfo2() {
    const userEmail = 'maria@email.com';

    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo2();

  /* Todas elas dão o mesmo resultado e não podem ser expressas fora da função */

// Exemplo 2

if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  if (true) {
    // inicio do escopo do if
    let userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // erro

  if (true) {
    // inicio do escopo do if
    const userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // erro

// Exemplo 3

var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas

let userName = "Isabella";
let userName = "Lucas";
console.log(userName); // Erro: variável já declarada

const userName = "Isabella";
const userName = "Lucas";
console.log(userName); // Erro: já declarado

// Exemplo 4
const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

// Exemplo 5

const userInfo = {
    name: "Cláudio",
    identity: "5489-2",
    email: "claudio@email.com"
  };
  userInfo.name = "João"
  
  console.log(userInfo) // { name: "João", identity: "5483-2", email: "claudio@email.com }, id já é reservado ao HTML

//Exemplo 6

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// Exemplo 7 - Template Literals

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// Exemplo 8 - Arrow Functions

const printName = () => {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());

// Exemplo 9

const printName = () => "Lucas";
console.log(printName());

// Exemplo 10

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10)); //20

// Exemplo 11

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2)); //16

