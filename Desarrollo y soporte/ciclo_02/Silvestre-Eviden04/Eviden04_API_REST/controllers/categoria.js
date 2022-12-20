'use strict'

var client = require("../database/db");
var db = client.db("sucursales1bd");

var controller = {

    list: function (req, res) {
        console.log("------------------------");
        console.log("ENTRANDO A LA FUNCION LIST");
        db.collection("categorias").find().toArray(
            (error, dataCategorias) => {
                if (error || !dataCategorias) {
                    console.log(error);
                    return res.status(404).send({
                        message: " No se encontraron categorias"
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        dataCategorias: dataCategorias
                    });
                }
            }
        );
    }

    // FIND
    // SAVE
}
module.exports = controller;