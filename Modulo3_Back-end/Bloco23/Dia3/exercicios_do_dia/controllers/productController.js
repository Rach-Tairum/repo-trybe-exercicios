const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  if(!products) return res.status(400).json("Erro na requisição ao dB")

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if(!product) return res.status(404).json({message: "Produto não encontrado"})
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  if (name === '' || !name || brand === ''|| !brand) return res.status(404).json({message:"nome e marca são obrigatórios"})
  
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  if(!id) return res.status(404).json({message:"Produto não encontrado"})
  
  await ProductModel.exclude(id);

  const products = await ProductModel.getAll();

  res.status(204).json(products);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, brand } = req.body;

  if (name === '' || !name || brand === ''|| !brand) return res.status(404).json({message:"nome e marca são obrigatórios"})

  const products = await ProductModel.update(id, name, brand);
  if(!products) return res.status(404).json({message:"Produto não encontrado"})

  res.status(200).json(products);
});

module.exports = router;