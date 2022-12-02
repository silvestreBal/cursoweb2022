'use strict'

var express = require('express');

var LocalController = require('../controllers/local');// ARNOLD

var router = express.Router();

// RUTAS
router.get('/local/list', LocalController.listar);
router.get('/local/form/:id',LocalController.form); // ABRIENDO EL FORM
router.post('/local/save', LocalController.save);

module.exports = router;