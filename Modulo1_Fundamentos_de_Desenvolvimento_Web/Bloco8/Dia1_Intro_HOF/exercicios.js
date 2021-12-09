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