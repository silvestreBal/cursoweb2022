'use strict'

var client = require("../database/db");    // PARA CONECTAR A LA BASE DE DATOS
var db = client.db("sucursales1bd");    // NOMBRE DE LA BASE DE DATOS


var controller = {

    listar: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        // SCRIPTS DE MONGODB
        db.collection("locales").find().toArray().then(
            locales => {
                res.render('locales_list', { dataLocales: locales });// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            );
    },

    form: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION FORM");
        console.log("id:" + req.params.id);
        if (req.params.id == 0) {
            var local = {}
            local.idLocal = 0;
            local.distrito = "";
            local.direccion = "";
            local.telefono = "";
            local.horario = "";
            local.estado = "";
            res.render('local_form', { localForm: local });
        }
    },
    
    save: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log("id:" + req.body.idLocal);
        if (req.body.idLocal == 0) {// ES NUEVO
            console.log("REGISTRO NUEVO");
            db.collection("locales").count().then(// OBTENGO EL TOTAL DE ELEMENTOS
                countLocales => {
                    var local = {}
                    local.idLocal = countLocales + 1;
                    local.distrito = req.body.distrito;
                    local.direccion = req.body.direccion;
                    local.telefono = req.body.telefono;
                    local.horario = req.body.horario;
                    local.estado = req.body.estado;
                    console.log(local);
                    db.collection("locales").insertOne(local).then(
                        () => {
                            res.redirect('/local/list');
                        }
                    ).catch(
                        error => console.error(error)
                    );
                }
            );
        }

    }
}

module.exports = controller;