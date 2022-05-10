/* Crie uma função que receba três parâmetros e retorna uma Promise.
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".

Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).

Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"

Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. */

const calculo = (num1, num2, num3) => {
  const promisse = new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number"|| typeof num3 !== "number") {
      reject(new Error ("Informe apenas números"));
    };

    const result = ((num1 + num2) * num3)

    if (result < 50) {
      reject(new Error("Valor muito baixo"));
    } else {
      resolve(result);
    };
  });

  return promisse;
};

// exercicio 2
const a = Math.floor(Math.random() * 100 + 1)
const b = Math.floor(Math.random() * 100 + 1)
const c = Math.floor(Math.random() * 100 + 1)


// calculo(a, b, c).then(value => console.log('resultado: ', value))
// .catch(err => console.log('Erro: ', err));

module.exports = calculo;