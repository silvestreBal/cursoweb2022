'use strict'

var express = require('express');

var ProductoController = require('../controllers/producto');// ARNOLD

var router = express.Router();

// RUTAS
router.get('/producto/list', ProductoController.listar);

module.exports = router;