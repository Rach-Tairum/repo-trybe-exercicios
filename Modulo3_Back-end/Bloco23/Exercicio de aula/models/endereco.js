const connections = require('./connections');

const requestAllAddress = async () => {
  const [result] = await connections.execute('SELECT * FROM `ocorrencias-cidade`.endereco;');

  return result;
};

// const findAddressdB = async (obj) => {
//   const [result] = await connections.execute(`SELECT * FROM `ocorrencias-cidade`.endereco WHERE logradouro = ;`);
// }

module.exports = {requestAllAddress}