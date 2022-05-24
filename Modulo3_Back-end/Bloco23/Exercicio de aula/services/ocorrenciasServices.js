const { requestAllOcurrencies } = require('../models/ocorrencias');

const changeNamesVar = async () => {
  const newArr = await requestAllOcurrencies();

  const teste = newArr.map((ocorrencia) => {
    const obj = {
      idOcorrencia: ocorrencia.id_ocorrencia,
      descricao: ocorrencia.descricao,
      dataHora: ocorrencia.data_hora,
      categoria: ocorrencia.categoria,
      idEndereco: ocorrencia.id_endereco,
    }
    return obj;
  })

  return teste;
};

const setOcorrencia = (descricao, dataHora, categoria, idAddress) => {

}

module.exports = {changeNamesVar};