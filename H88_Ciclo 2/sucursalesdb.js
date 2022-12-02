use sucursalesdb
db
db.locales.insertOne({
    idLocal:1,
    distrito:"LOS OLIVOS",
    direccion:"Av. Naranjal",
    telefono:"983825267",
    horario:"6pm - 10pm",
    estado:"ACTIVO"
});
db.locales.find()
db.locales.insertOne({
    idLocal:2,
    distrito:"S.M.P.",
    direccion:"Av. Peru",
    telefono:"988243894",
    horario:"11pm - 10pm",
    estado:"ACTIVO"
});