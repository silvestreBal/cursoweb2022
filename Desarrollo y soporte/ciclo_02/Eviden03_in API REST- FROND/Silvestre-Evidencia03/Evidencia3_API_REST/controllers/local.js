'use strict'

const { restart } = require("nodemon");
var client = require("../database/db");
var db = client.db("sucursales1bd");

var controller = {
    list: function(req, res){
        console.log("------------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("locales").find().toArray(
            (error, dataLocales) => {
                if (error || !dataLocales) {
                    console.log(error);
                    return res.status(404).send({
                        message : " No se encontraron locales"
                    });
                } else {
                    return res.status(200).send({
                        status : "success",
                        dataLocales: dataLocales
                    });
                }
            }
        );
    },
    find: function (req, res) {
        console.log("------------------------");
        console.log("ENTRANDO A LA FUNCION FIND");
        console.log("id:" + req.params.id);
        db.collection("locales").find({ idLocal: parseInt(req.params.id) }).toArray(
            (error, datalocales) => {
                if (error || !datalocales ) {
                    console.log(error);
                    return res.status(404).send({
                        message : " No se encontraron el local"
                    });
                } else {
                    return res.status(200).send({
                        status : "success",
                        local: datalocales[0]
                    });
                }
            }
        );
    },
    save: function(req, res) {
        console.log("------------------------");
        console.log("ENTRANDO A SAVE");
        console.log(req.body);
        if(req.body.idLocal == "0"){//NUEVO
            console.log("ENTRANDO A NUEVO");
            db.collection("locales").count().then(
                countlocales =>{
                    var local = {}
                    local.idLocal = countlocales + 1;
                    local.distrito = req.body.distrito;
                    local.direccion = req.body.direccion;
                    local.telefono = req.body.telefono;
                    local.horario = req.body.horario;
                    local.estado = req.body.estado;
                    db.collection('locales').insertOne(local,
                        (error, result) => {
                            if(error){
                                console.log(error);
                                return res.status(404).send({
                                    message: "No se puede registrar el local."
                                });
                            } else {
                                return res.status(200).send({
                                    status:"success",
                                    local: result
                                });
                            }
                        }
                    );
                }
            );
        }else{//EDITAR
            console.log("ENTRANDO A EDITAR");
            var local = {}
            local.idLocal = parseInt(req.body.idLocal);
            local.distrito = req.body.distrito;
            local.direccion = req.body.direccion;
            local.telefono = req.body.telefono;
            local.horario = req.body.horario;
            local.estado = req.body.estado;
            console.log(local);
            db.collection("locales").updateOne({ idLocal: { $eq: parseInt(req.body.idLocal) } },
                                                 { $set: local },
                (error, result) => {
                    if(error){
                        console.log(error);
                        return res.status(404).send({
                            message: "No se puede editar el local."
                        });
                    } else {
                        return res.status(200).send({
                            status:"success",
                            local: result
                        });
                    }
                }
            );
        }
    }
}

module.exports = controller;