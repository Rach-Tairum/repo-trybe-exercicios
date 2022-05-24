const express = require('express');
const router = express.Router();

//Health Checker controller
router.use('/healthchecker', require('./controllers/healthchecker'));

router.use('/enderecos', require('./controllers/enderecoController'));

router.use('/ocorrencias', require('./controllers/ocorrenciasController'));

module.exports = router;