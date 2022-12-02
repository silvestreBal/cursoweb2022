'use strict'

var express = require('express');
var LocalController = require('../controllers/local');

var router = express.Router();

// RUTAS PARA PRODUCTOS 
router.get('/locales', LocalController.list);
router.get('/locales/:id', LocalController.find);
router.post('/locales/save', LocalController.save);

module.exports = router;