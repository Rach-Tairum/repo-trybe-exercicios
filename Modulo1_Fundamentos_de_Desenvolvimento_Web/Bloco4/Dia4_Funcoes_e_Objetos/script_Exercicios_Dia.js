// exercícios Objeto e for in

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log ('Bem-Vinda, ' + info.personagem);


/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info.recorrente = 'Sim';

console.log (info);

/* 3 - Faça um for/in que mostre todas as chaves do objeto. */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim';

for (let key in info) {
    console.log (key);
};

/* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim';

  for(let i in info){
      console.log (info[i]);
  };


/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim';

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let properties in info) {
if (properties === 'recorrente' && info[properties] === 'Sim' && info2[properties] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

/*6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log (' O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


/* 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações: */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

leitor.livrosFavoritos.push ({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  });
  console.log (leitor);

/* 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos". */

console.log (leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


// Exercicios Funções

/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.*/

function verificaPalindromo(palavra){
    let palavraReversa = '';

    for (i = palavra.length -1; i = 0; i -= 1){
        palavraReversa = palavraReversa + palavraReversa[i];
    };

    console.log (palavraReversa);

    if (palavra === palavraReversa){
        return 'True';
    } else {
        return 'False'
    ;}
};
let palavra = 'desenvolvimento'
let palavraReversa = '';
let palavraSeparada = [];

for (index = 0; index < palavra.length; index += 1){
    palavraSeparada.push (palavra[index]);
}
//console.log (palavraSeparada);

    for (i = palavraSeparada.length -1; i >= 0; i --){
        palavraReversa += palavraSeparada[i];
    };

    console.log (palavraReversa);

console.log (verificaPalindromo('arara'))


function maiorValor(array){
    let maiorNumero = 0;

    for (let i in array){
       if (array[maiorNumero] < array[i]){
        maiorNumero = i;     
        } 
    }
    return maiorNumero;
}

console.log (maiorValor([2, 3, 6, 7, 10, 1]));