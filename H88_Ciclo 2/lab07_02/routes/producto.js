'use strict'

var express = require('express');

var ProductoController = require('../controllers/producto');// ARNOLD

var router = express.Router();

// RUTAS
router.get('/producto/list', ProductoController.listar);
router.get('/producto/form/:id',ProductoController.form); // ABRIENDO EL FORM
router.post('/producto/save', ProductoController.save);

module.exports = router;