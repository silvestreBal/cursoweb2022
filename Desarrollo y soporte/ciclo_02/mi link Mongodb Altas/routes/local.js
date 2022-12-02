'use strict'

var express = require('express');

var LocalController = require('../controllers/local');// ARNOLD

var router = express.Router();

// RUTAS
router.get('/locales/list', LocalController.listar);
router.get('/locales/form/:id',LocalController.form); // ABRIENDO EL FORM
router.post('/locales/save', LocalController.save);

module.exports = router;