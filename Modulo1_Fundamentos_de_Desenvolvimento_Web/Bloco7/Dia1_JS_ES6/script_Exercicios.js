/* Parte I
Agora você vai fazer alguns exercícios de fixação.
1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
 - Modifique a estrutura da função para que ela seja uma arrow function .
 - Modifique as concatenações para template literals .*/
 
 // função original
 function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  // função adaptada
  const testingScope = escopo => {
    if (escopo === true)  {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
        ifScope = `${ifScope} ótimo, fui utilizada no escopo"`;
        console.log(ifScope);
    } else {
        let elseScope = "Não devo ser utilizada fora meu escopo (else)"
        console.log(elseScope);
    }
  }
  console.log(testingScope (true));

  /* 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
   - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

  - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.*/

  // Referência:
  //https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  function ordenaArray (){
      let ordenada = oddsAndEvens.sort((a,b) => {
          if (a > b) {
              return 1
            } else if (a < b) {
                return -1
            } else {
                return 0
            }
      })
    return `Os números ${ordenada} se encontram ordenados de forma crescente`
  }

  console.log(ordenaArray()); 

/* Parte II
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator.*/

/*1. Crie uma função que receba um número e retorne seu fatorial.

- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .*/

const factor = numero => {
    let fatorado = 1;
    for(let i = 1; i <= numero; i += 1){
        fatorado = fatorado * i
    }
    return fatorado
}
console.log(factor(5))


