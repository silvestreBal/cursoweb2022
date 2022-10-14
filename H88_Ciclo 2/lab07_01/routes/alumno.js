'use strict'

var express = require('express');

var AlumnoController = require('../controllers/alumno');// HELTON

var router = express.Router();

// RUTAS
router.get('/alumno/list', AlumnoController.listar);

module.exports = router;