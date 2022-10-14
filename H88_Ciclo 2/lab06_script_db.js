// CREAR UNA BASE DE DATOS
use hospitaldb

// VER LA BASE DE DATOS
db

// CREAR UNA COLECCION LLAMADA PACIENTES INSERTANDO UN DOCUMENTO
db.pacientes.insertOne(
    {
        idPaciente:1,
        nombApellido:"JHON DOE",
        dni:"56789021",
        edad:"21",
        telefono:"987765342",
        estado:"ACTIVO"
    }
)
db.pacientes.insertOne(
    {
        idPaciente:2,
        nombApellido:"MARIO PEREZ",
        dni:"56789026",
        edad:"28",
        telefono:"987765343",
        estado:"ACTIVO"
    }
)
// BUSCAR PACIENTES
db.pacientes.find()
// INSERTAR VARIOS PACIENTES CON INSERTMANY
db.pacientes.insertMany(
    [
        {
        idPaciente:3,
        nombApellido:"DANIEL LEE",
        dni:"56789029",
        edad:"23",
        telefono:"987765341",
        estado:"ACTIVO"
        },
        {
        idPaciente:4,
        nombApellido:"RITA WATSS",
        dni:"56789022",
        edad:"24",
        telefono:"987765342",
        estado:"INACTIVO"
        },
    ]
)

// LIMPIANDO LA COLECCION PACIENTES
db.pacientes.deleteMany({})

// FILTRAR O BUSCAR UNA COLECCION POR UN VALOR CON FIND
use hospitaldb
db.pacientes.find({idPaciente:3})


//EDITAR UN DOCUMENTO POR UN VALOR
use hospitaldb
db.pacientes.updateOne({idPaciente:{$eq:4}},{$set:{nombApellido:'LUNA ZEVALLOS'}})
db.pacientes.find()



// PARA ELIMINAR UNA COLECCION Cuidado! USAR CON PRECAUCION
//use hospital
//db.pacientes.drop()