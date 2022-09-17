// SACANDO LOS DATOS DE LA TABLA
var tablaSucursal = localStorage.getItem("tablaSucursalStorage");
tablaSucursal = JSON.parse(tablaSucursal);
if (tablaSucursal == null) {
    var tablaSucursal = [];
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
                var objSucursal = JSON.stringify({
                    idLocal: (idForm > 0) ? idForm : (tablaSucursal.length + 1),
                    lugares: document.getElementById("txtLugares").value,
                    direccion: document.getElementById("txtDireccion").value,
                    telefono: document.getElementById("txtTelefono").value,
                    horario: document.getElementById("txtHorario").value,
                    estado: document.getElementById("cboEstado").value,

                });
                console.log(objSucursal);
                //GUARDANDO EN EL LOCALSTORAGE
                if (idForm > 0) {// EDITAR Sucursal
                    for (const i in tablaSucursal) { // BUSCAR Sucursal PARA EDITARLO
                        var varSucursal = JSON.parse(tablaSucursal[i]);
                        if (varSucursal.idLocal == idForm) { // ENCONTRAR
                            tablaSucursal[i] = objSucursal;
                            break;
                        }
                    }


                } else { // NUEVO Sucursal
                    tablaSucursal.push(objSucursal); // PARA NUEVO Sucursal
                }
                localStorage.setItem("tablaSucursalStorage", JSON.stringify(tablaSucursal));

                Swal.fire('Se guardaron los datos ! ', '', 'success').then(
                    (result) => {
                        window.location.replace("sucursales.html");// REGRESAR A Sucursales.HTML
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
        for (const i in tablaSucursal) {// BUSCAR EL Sucursal EN LA TABLA
            var varSucursal = JSON.parse(tablaSucursal[i]); // SACAMOS LA FILA 
            if (varSucursal.idLocal == idForm) { // COMPARAMOS IDLOCAL CON EL IDFORM
                // PONIENDO LOS DATOS ENCONTRADOS EN EL FORMULARIO PARA SU EDICION
                document.getElementById("txtIdLocal").value = varSucursal.idLocal;
                document.getElementById("txtLugares").value = varSucursal.lugares;
                document.getElementById("txtDireccion").value = varSucursal.direccion;
                document.getElementById("txtTelefono").value = varSucursal.telefono;
                document.getElementById("txtHorario").value = varSucursal.horario;
                document.getElementById("cboEstado").value = varSucursal.estado;
                break;// DEJAR DE BUSCAR POR QUE SE ENCONTRO
            }
        }
    }
}