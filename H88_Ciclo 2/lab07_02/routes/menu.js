'use strict'

var express = require('express');

var MenuController = require('../controllers/menu');// ARNOLD

var router = express.Router();

// RUTAS
router.get('/menu/list', MenuController.listar);

module.exports = router;