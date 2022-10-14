var tablaReservaciones = localStorage.getItem("tablaReservacionesStorage");
tablaReservaciones = JSON.parse(tablaReservaciones);
if(tablaReservaciones == null)  {
    var tablaReservaciones = [];
}

listar();

function listar(){

    console.log("Ingresando a listar...");
    //console.log(tablaReservaciones);

    var dataFila = '';

    //LLENANDO LA TABLA
    if(tablaReservaciones.length > 0){ //SI LA TABLA NO ESTA VACIA
        for(const i in tablaReservaciones){
            var varReservaciones = JSON.parse(tablaReservaciones[i]);
            dataFila +="<tr>";
            dataFila +="<td>"+varReservaciones.idCliente+"</td>";
            dataFila +="<td>"+varReservaciones.nombApellido+"</td>";
            dataFila +="<td>"+varReservaciones.nPersonas+"</td>";
            dataFila +="<td>"+varReservaciones.Sucursal+"</td>";
            dataFila +="<td>"+varReservaciones.Dia+"</td>";
            dataFila +="<td>"+varReservaciones.Hora+"</td>";
            dataFila +="<td>"+varReservaciones.telefono+"</td>";
            dataFila +="<td>"+varReservaciones.direccion+"</td>";
            dataFila +="<td>"+varReservaciones.estado+"</td>";
            dataFila +="<td>"+
                       "<button type='button' class='btn btn-warning' onclick='abrirForm("+varReservaciones.idCliente+")'>EDITAR</button>"+
                       "</td>";
            dataFila +="</tr>";
        }
        document.getElementById("dataReservaciones").innerHTML = dataFila;
    }

}

function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("reservaciones-form.html");
}