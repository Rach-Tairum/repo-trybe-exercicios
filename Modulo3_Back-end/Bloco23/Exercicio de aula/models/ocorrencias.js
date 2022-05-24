const connections = require('./connections');

const requestAllOcurrencies = async () => {
  const [result] = await connections.execute('SELECT * FROM `ocorrencias-cidade`.ocorrencias;');

  return result;
};

module.exports = {requestAllOcurrencies}