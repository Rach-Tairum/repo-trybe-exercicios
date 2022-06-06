const tipoValor = (valor) => {
  if (typeof valor !== 'number') {
    throw new Error("Por favor digite um número")
  } else 
  if (valor > 0) {
    return "positivo";
  } else if (valor === 0) {
    return "neutro";
  }
  return "negativo"
};

module.exports = tipoValor;