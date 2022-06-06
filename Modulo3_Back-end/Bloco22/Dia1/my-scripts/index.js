const medidas = require("./perguntas");

const padroes = (imc) => {
  let padrao = '';

  if (imc < 18.5) {
    padrao = "Abaixo do peso (magreza)"
  } else if (imc < 25) {
    padrao = "Peso normal"
  } else if (imc < 30) {
    padrao = "Acima do peso (sobrepeso)"
  } else if (imc < 35) {
    padrao = "Obesidade grau I"
  }else if (imc < 40) {
    padrao = "Obesidade grau II"
  }else if (imc > 40) {
    padrao = "Obesidade graus III e IV"
  }

  return padrao
};

const medidaIMC = () => {
  const altura = medidas("Qual sua altura? (em metros) ");
  const peso = medidas("Qual seu peso? ")

  const altura2 = altura ** 2;
  

  const imc = Math.round(peso / altura2);

  console.log(imc);
  console.log(padroes(imc))
}

medidaIMC();