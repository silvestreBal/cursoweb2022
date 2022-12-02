'use strict'

var client = require("../database/db");    // PARA CONECTAR A LA BASE DE DATOS
var db = client.db("pruebasbd");    // NOMBRE DE LA BASE DE DATOS


var controller = {

    listar: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        // SCRIPTS DE MONGODB
        db.collection("menus").find().toArray().then(
            menus => {
                res.render('menu_list', { dataMenus: menus });// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            );
    }
}

module.exports = controller;