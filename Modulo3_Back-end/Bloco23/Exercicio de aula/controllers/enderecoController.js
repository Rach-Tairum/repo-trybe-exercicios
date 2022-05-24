const express = require('express');
const { changeNamesVar } = require('../services/enderecoServices');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const resultCall = await changeNamesVar();

  if (resultCall.length > 0) return res.status(200).json(resultCall);

  return res.status(400).json({ message: "Verifique sua requisição, deu ruim" })
});


module.exports = routes;