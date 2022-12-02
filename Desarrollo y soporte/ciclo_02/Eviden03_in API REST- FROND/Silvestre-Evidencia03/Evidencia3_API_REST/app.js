'use strict'

//REQUIRES
var express = require('express');
var bodyParser = require('body-parser');

//EJECUTAR EXPRESS
var app = express();

//CARGAR ARCHIVO DE RUTAS
var local_routes = require('./routes/local');

//AGREGAR LOS MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//CONFIGURAR CABECERAS Y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//REESCRIBIR RUTAS
app.use('/api',local_routes);

//EXPOTAR MODULO
module.exports = app;