'use strict'

//REQUIRES
var express = require('express');

//CARGAR ARCHIVO DE RUTAS
var local_routes = require('./routes/local');//

//EJECUTAR EXPRESS
var app = express();

//ASIGNO EJS A LAS VISTAS
app.set('view engine','ejs');

// DECODIFICACION DE ENVIOS FORM
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//REESCRIBIR RUTAS
app.use('/',local_routes);//

// EXPORTAR MODULO
module.exports = app;


