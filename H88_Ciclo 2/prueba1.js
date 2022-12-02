use sucursales1bd
db
db.locales.insertOne({
    idLocal:1,
    distrito:"COMAS",
    direccion:"Calle PRO",
    telefono:983825243,
    horario:"6pm - 10pm",
    estado:"ACTIVO" 
});
db.locales.find()
db.locales.insertOne({
    idLocal:2,
    distrito:"S.M.P.",
    direccion:"Av. Peru",
    telefono:988243894,
    horario:"11am - 10pm",
    estado:"INACTIVO" 
});
db.locales.insertOne({
    idLocal:3,
    distrito:"LOS OLIVOS",
    direccion:"Av. Naranjal",
    telefono:983825267,
    horario:"6pm - 10pm",
    estado:"ACTIVO" 
});
db.locales.insertOne({
    idLocal:4,
    distrito:"S.M.P.",
    direccion:"Av. Tantamayo",
    telefono:988243875,
    horario:"3pm - 8pm",
    estado:"ACTIVO" 
});
