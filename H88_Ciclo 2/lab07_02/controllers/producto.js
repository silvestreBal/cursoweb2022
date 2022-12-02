'use strict'

var client = require("../database/db");    // PARA CONECTAR A LA BASE DE DATOS
var db = client.db("pruebasbd");    // NOMBRE DE LA BASE DE DATOS


var controller = {

    listar: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        // SCRIPTS DE MONGODB
        db.collection("productos").find().toArray().then(
            productos => {
                res.render('producto_list', { dataProductos: productos });// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            );
    },
    form: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION FORM");
        console.log("id:" + req.params.id);
        if (req.params.id == 0) {
            var producto = {}
            producto.idProducto = 0;
            producto.descripcion = "";
            producto.precio = "";
            res.render('producto_form', { productoForm: producto });
        }
    },
    save: function (req, res) {
        console.log("-----------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log("id:" + req.body.idProducto);
        if (req.body.idProducto == 0) {// ES NUEVO
            console.log("REGISTRO NUEVO");
            db.collection("productos").count().then(// OBTENGO EL TOTAL DE ELEMENTOS
                countProductos => {
                    var producto = {}
                    producto.idProducto = countProductos + 1;
                    producto.descripcion = req.body.descripcion;
                    producto.precio = req.body.precio;
                    console.log(producto);
                    db.collection("productos").insertOne(producto).then(
                        () => {
                            res.redirect('/producto/list');
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