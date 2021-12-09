// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const novoMembro = (nome) => {
    const nomeParaEmail = nome.toLowerCase();
    const arrayNome = nomeParaEmail.split(' ');
    const nomeEmail = arrayNome.join('_');
    const email = `${nomeEmail}@trybe.com`

    const pessoa = {
        nomeCompleto: nome,
        email: email,
    };

    return pessoa
};

const newEmployees = () => {
    const employees = {
      id1: novoMembro('Pedro Guerra'), 
      id2: novoMembro('Luiza Drumond'), 
      id3: novoMembro('Carla Paiva'), 
    }
    return employees;
  };

  console.log(newEmployees())

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sera = (apostado, sorteado) => {
    if(apostado === sorteado) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente')
    }
}

function loteria (aposta, sorte) {
    const sorteado = parseInt(Math.random() * (6-1) + 1)
    console.log(sorteado)
    const resultado = sorte(aposta,sorteado)

    return resultado
}

loteria(3,sera)

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

