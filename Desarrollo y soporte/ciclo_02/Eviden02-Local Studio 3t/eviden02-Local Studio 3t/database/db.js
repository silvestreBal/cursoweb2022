const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");// RUTA DE LA BASE DE DATOS
client.connect().then(
    (response) => {
        console.log('La conexion a la bd es correcta -url:' + response.s.url);
    },
    (error) => {
        console.error('error:' + error);
    }
);
module.exports = client;