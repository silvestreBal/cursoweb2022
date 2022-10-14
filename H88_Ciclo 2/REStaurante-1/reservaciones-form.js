
var tablaReservaciones= localStorage.getItem("tablaReservacionesStorage");
tablaReservaciones = JSON.parse(tablaReservaciones);
if(tablaReservaciones == null){
    var tablaReservaciones = [];
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
                var objReservaciones = JSON.stringify({
                    idCliente   : (idForm > 0) ? idForm : (tablaReservaciones.length + 1),
                    nombApellido : document.getElementById("txtNombApellido").value,
                    nPersonas : document.getElementById("txtnPersonas").value,
                    Sucursal : document.getElementById("cboSucursal").value,
                    Dia : document.getElementById("txtDia").value,
                    Hora : document.getElementById("txtHora").value,
                    telefono : document.getElementById("txtTelefono").value,
                    direccion : document.getElementById("txtDireccion").value,
                    estado : document.getElementById("cboEstado").value,
                
                });
                console.log(objReservaciones);
                //GUARDANDO EN EL LOCALSTORAGE
                if (idForm > 0) {
                    for (const i in tablaReservaciones) {
                        var varReservaciones =JSON.parse(tablaReservaciones[i]);
                        if (varReservaciones.idCliente == idForm) {
                            tablaReservaciones[i] = objReservaciones;
                            break;
                        }
                    }


                } else {
                    tablaReservaciones.push(objReservaciones);
                }
                localStorage.setItem("tablaReservacionesStorage", JSON.stringify(tablaReservaciones));

                Swal.fire('Se guardaron los datos ! ', '', 'succes').then(
                    (result) => {
                        window.location.replace("reservaciones.html");
                    }
                );
            } else if(result.isDenied){
                Swal.fire('Cambios no Gradados', '', 'info');
            }
        }
    );   
}

function cargarPagina() {
    if (idForm > 0) {
        for (const i in tablaReservaciones){
            var varReservaciones = JSON.parse(tablaReservaciones[i]);
            if (varReservaciones.idCliente == idForm){
                document.getElementById("txtIdCliente").value = varReservaciones.idCliente;
                document.getElementById("txtNombApellido").value = varReservaciones.nombApellido;
                document.getElementById("txtnPersonas").value = varReservaciones.nPersonas;
                document.getElementById("cboSucursal").value = varReservaciones.Sucursal;
                document.getElementById("txtDia").value = varReservaciones.Dia;
                document.getElementById("txtHora").value = varReservaciones.Hora;
                document.getElementById("txtTelefono").value = varReservaciones.telefono;
                document.getElementById("txtDireccion").value = varReservaciones.direccion;
                document.getElementById("cboEstado").value = varReservaciones.estado;
                break;
            }
        }
    }
}
