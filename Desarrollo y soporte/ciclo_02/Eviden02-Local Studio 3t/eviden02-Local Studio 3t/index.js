'use strict' 

var mongoose = require('mongoose'); // IMPORTAR LIBRERIA
var app = require('./app');         // IMPORTAR EL ARCHIVO APP.JS
var port = process.env.PORT || 3999;// PARA EL PUERTO DEL SERVIDOR 


mongoose.Promise = global.Promise;// USAMOS PROMESAS PARA QUE ESPERE CONSULTAS
mongoose.connect('mongodb://localhost:27017/sucursalesbd',{ useNewUrlParser:true})// URL DE CONEXION
    .then(
        () => {// SI LA CONEXION CON URL ES CORRECTA ENTONCES
            console.log('LA CONEXION A LA BASE DE DATOS ES CORRECTA');
            // CREANDO SERVIDOR:
            app.listen(port,() => {
                console.log('El servidor http://localhost:3999 esta funcionando...');
            });
        }
    )
    .catch( error => console.log(error));// ATRAPA UN ERROR Y LO MUESTRA POR CONSOLA


