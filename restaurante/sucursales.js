var tablaSucursal = localStorage.getItem("tablaSucursalStorage");
tablaSucursal = JSON.parse(tablaSucursal);
if (tablaSucursal == null) {
    var tablaSucursal = [];
}

listar();

function listar(){


    console.log("Ingresando a listar...");
    //console.log(tablaSucursal);

    var dataFila = '';

    // LLENANDO LA TABLA
    if(tablaSucursal.length > 0){ // SI LA TABLA NO ESTA VACIA
        for(const i in tablaSucursal){
            var varSucursal =  JSON.parse(tablaSucursal[i]);
            dataFila +="<tr>";
            dataFila +="<td>"+varSucursal.idLocal+"</td>";
            dataFila +="<td>"+varSucursal.lugares+"</td>";
            dataFila +="<td>"+varSucursal.direccion+"</td>";
            dataFila +="<td>"+varSucursal.telefono+"</td>";
            dataFila +="<td>"+varSucursal.horario+"</td>";
            dataFila +="<td>"+varSucursal.estado+"</td>";
            dataFila +="<td>"+
                       "<button type='button' class='btn btn-warning' onclick='abrirForm("+varSucursal.idLocal+")'>EDITAR</button>"+
                       "</td>";
            dataFila +="</tr>";

        }
        document.getElementById("dataSucursales").innerHTML = dataFila;
    }

}

function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("sucursales-form.html");
}