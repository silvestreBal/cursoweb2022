'use strict'

var express = require('express');
var CategoriaController = require('../controllers/categoria');

var router = express.Router();

// RUTAS PARA PRODUCTOS 
router.get('/categoria', CategoriaController.list);

module.exports = router;