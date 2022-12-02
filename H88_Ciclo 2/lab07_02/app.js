'use strict'

//REQUIRES
var express = require('express');

//CARGAR ARCHIVO DE RUTAS
var producto_routes = require('./routes/producto');// ARNOLD
var alumno_routes = require('./routes/alumno');// helton
var menu_routes = require('./routes/menu');// arith

//EJECUTAR EXPRESS
var app = express();

//ASIGNO EJS A LAS VISTAS
app.set('view engine','ejs');

// DECODIFICACION DE ENVIOS FORM
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//REESCRIBIR RUTAS
app.use('/',producto_routes);// arnold
app.use('/',alumno_routes);// helton
app.use('/',menu_routes);// helton

// EXPORTAR MODULO
module.exports = app;