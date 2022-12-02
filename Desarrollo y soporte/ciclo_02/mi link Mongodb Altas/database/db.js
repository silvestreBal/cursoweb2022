const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://silver123:silver123@cluster0.jnmrttc.mongodb.net/?retryWrites=true&w=majority");// RUTA DE LA BASE DE DATOS
client.connect().then(
    (response) => {
        console.log('La conexion a la bd es correcta -url:' + response.s.url);
    },
    (error) => {
        console.error('error:' + error);
    }
);
module.exports = client;