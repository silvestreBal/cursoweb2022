// SACANDO LOS DATOS DE LA TABLA
var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente = JSON.parse(tablaPaciente);
if (tablaPaciente == null) {
    var tablaPaciente = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    var idForm = 0;
}

cargarPagina();

function guardar() {

    Swal.fire({
        title: 'GUARDAR',
        html: 'DESEA GUARDAR CAMBIOS ?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {
                console.log("PRESIONO GUARDAR...");
                var objPaciente = JSON.stringify({
                    idPaciente: (idForm > 0) ? idForm : (tablaPaciente.length + 1),
                    nombApellido: document.getElementById("txtNombApellido").value,
                    dni: document.getElementById("txtDni").value,
                    telefono: document.getElementById("txtTelefono").value,
                    direccion: document.getElementById("txtDireccion").value,
                    estado: document.getElementById("cboEstado").value,

                });
                console.log(objPaciente);
                //GUARDANDO EN EL LOCALSTORAGE
                if (idForm > 0) {// EDITAR PACIENTE
                    for (const i in tablaPaciente) { // BUSCAR PACIENTE PARA EDITARLO
                        var varPaciente = JSON.parse(tablaPaciente[i]);
                        if (varPaciente.idPaciente == idForm) { // ENCONTRAR
                            tablaPaciente[i] = objPaciente;
                            break;
                        }
                    }


                } else { // NUEVO PACIENTE
                    tablaPaciente.push(objPaciente); // PARA NUEVO PACIENTE
                }
                localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));

                Swal.fire('Se guardaron los datos ! ', '', 'success').then(
                    (result) => {
                        window.location.replace("recomendaciones.html");// REGRESAR A PACIENTES.HTML
                    }
                );
            } else if(result.isDenied){
                Swal.fire('Cambios no Guardados', '', 'info');
            }
        }
    );


}

function cargarPagina() {
    if (idForm > 0) {
        for (const i in tablaPaciente) {// BUSCAR EL PACIENTE EN LA TABLA
            var varPaciente = JSON.parse(tablaPaciente[i]); // SACAMOS LA FILA 
            if (varPaciente.idPaciente == idForm) { // COMPARAMOS IDPACIENTE CON EL IDFORM
                // PONIENDO LOS DATOS ENCONTRADOS EN EL FORMULARIO PARA SU EDICION
                document.getElementById("txtIdPaciente").value = varPaciente.idPaciente;
                document.getElementById("txtNombApellido").value = varPaciente.nombApellido;
                document.getElementById("txtDni").value = varPaciente.dni;
                document.getElementById("txtTelefono").value = varPaciente.telefono;
                document.getElementById("txtDireccion").value = varPaciente.direccion;
                document.getElementById("cboEstado").value = varPaciente.estado;
                break;// DEJAR DE BUSCAR POR QUE SE ENCONTRO
            }
        }
    }
}