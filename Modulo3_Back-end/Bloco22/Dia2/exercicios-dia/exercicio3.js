const calculo = require('./exercicio1');

const calculadora = async () => {
  const a = Math.floor(Math.random() * 100 + 1)
  const b = Math.floor(Math.random() * 100 + 1)
  const c = Math.floor(Math.random() * 100 + 1)

  try {
    const result = await calculo(a, b, c);
    console.log("Resposta:",result)
  } catch (err) {
    console.log("Erro: ", err.message)
  }
};

calculadora();