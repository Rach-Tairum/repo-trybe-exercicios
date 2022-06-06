const { requestAllAddress } = require('../models/endereco');

const changeNamesVar = async () => {
  const newArr = await requestAllAddress();

  const teste = newArr.map((address) => {
    const obj = {
      idEndereco: address.id_endereco,
      rua: address.logradouro,
      numero: address.numero,
      bairro: address.bairro,
      cep: address.cep,
    }
    return obj;
  })

  return teste;
};

const findAddress = (obj) => {
  const isAddressNew = findAddressdB(obj);
  if (isAddressNew === null) return addNewAdrres(obj);
  
  return isAddressNew[0].id_endereco
  
}

module.exports = {changeNamesVar, findAddress};