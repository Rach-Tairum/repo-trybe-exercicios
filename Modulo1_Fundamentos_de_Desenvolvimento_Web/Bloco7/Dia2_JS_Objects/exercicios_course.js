// Parte 1

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  const customerInfo = (order) => {

      return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`
  }
  
  console.log(customerInfo(order));

//Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  
  const orderModifier = (order) => {
    const novoNome = order.name = 'Luiz Silva'
    const novoPreco = order.payment.total = 50
    const pizzas = Object.keys(order.order.pizza)
  
    return `Olá ${novoNome}, o total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é de R$ ${novoPreco},00.`
  }
  
  console.log(orderModifier(order));



// Parte 2

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addTurno(lesson, chave, valor) {
    lesson[chave] = valor 
}
addTurno(lesson2, 'turno', 'noite')
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaChaves = (obj) => Object.keys(obj)

console.log(listaChaves(lesson3))

// 3. Crie uma função para mostrar o tamanho de um objeto

const tamanhoObjeto = (lesson) => Object.keys(lesson).length

console.log(tamanhoObjeto(lesson2))

// 4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valoresObjeto = (lesson) => Object.values(lesson)

console.log(valoresObjeto(lesson1))

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

let allLessons = {}

Object.assign(allLessons, {lesson1, lesson2, lesson3})

console.log(allLessons)

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function estudantes() {
    const aula1 = Object.values(allLessons.lesson1)
    const aula2 = Object.values(allLessons.lesson2)
    const aula3 = Object.values(allLessons.lesson3)
    
    let somaAlunos = aula1[1] + aula2[1] + aula3[1]

    console.log(somaAlunos)

}
estudantes()

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const posicao = (lesson, posicao) => Object.values(lesson)[posicao]

console.log(posicao(lesson1, 0))

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifica(lesson, chave, valor) {
    if (lesson[chave] === valor) {
        console.log(true)
    } else {
        console.log(false)
    }
}
verifica(lesson3, 'turno', 'manha')


// Bônus

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
let allLessons = {}

Object.assign(allLessons, {lesson1, lesson2, lesson3})

function aulasMat(obj) {
    let alunosMat = 0
    const array = Object.keys(obj);
    
    for (index in array) {
        if(obj[array[index]].materia === 'Matemática'){
            alunosMat += obj[array[index]].numeroEstudantes;
        }
    }
    console.log(alunosMat)
}
aulasMat(allLessons)

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5.

// function relatorioProf (obj, prof){
//     let relatorio = {
//         nome: prof,
//         materia: obj[],
//         estudantes:,
//     }
// }