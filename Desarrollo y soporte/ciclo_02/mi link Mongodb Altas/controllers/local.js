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
        if (req.params.id == 0) { // ES NUEVO
            var local = {}
            local.idLocal = 0;
            local.distrito = "";
            local.direccion = "";
            local.telefono = "";
            local.horario = "";
            local.estado = "";
            res.render('local_form', { localForm: local });
        } else {//ES EDITAR 
            db.collection("locales").find({ idLocal: parseInt(req.params.id) }).toArray().then(
                localEncontrado => {
                    console.log(localEncontrado[0]);
                    res.render('local_form', { localForm : localEncontrado[0]});
                }
            ).catch(
                error => console.error(error)
            );
        
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
                            res.redirect('/locales/list');
                        }
                    ).catch(
                        error => console.error(error)
                    );
                }
            );
        } else { // ES EDITAR
            console.log('EDITANDO:');
            var local = {}
            local.idLocal = parseInt(req.body.idLocal);
            local.distrito = req.body.distrito;
            local.direccion = req.body.direccion;
            local.telefono = req.body.telefono;
            local.horario = req.body.horario;
            local.estado = req.body.estado;
            console.log(local);
            // GUARDANDO EN LA BASE DE DATOS
            db.collection("locales").updateOne({ idLocal : {$eq : parseInt(req.body.idLocal)} }, // buscar por el Id
                                                 { $set: local }  // set objeto 
            ).then(
                () => {
                    res.redirect('/locales/list');
                }
            ).catch(
                error => console.error(error)
            );
        }

    }
}

module.exports = controller;