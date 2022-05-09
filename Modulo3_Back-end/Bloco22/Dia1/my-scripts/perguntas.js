const readline = require('readline-sync');

const medidas = (mensagem) => {
  const medida = readline.questionFloat(mensagem)
  return medida
};

module.exports =  medidas;