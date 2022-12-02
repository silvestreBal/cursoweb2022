var tablaMozo = localStorage.getItem("tablaMozoStorage");
tablaMozo = JSON.parse(tablaMozo);
if (tablaMozo == null) {
    var tablaMozo = [];
}

listar();

function listar(){
    console.log("Ingresando a listar...");
    //console.log(tablaPaciente);

    var dataFila = '';

    // LLENANDO LA TABLA
    if(tablaMozo.length > 0){ // SI LA TABLA NO ESTA VACIA
        for(const i in tablaMozo){
            var varMozo =  JSON.parse(tablaMozo[i]);
            dataFila +="<tr>";
            dataFila +="<td>"+varMozo.idMozo+"</td>";
            dataFila +="<td>"+varMozo.apellidoNombre+"</td>";
            dataFila +="<td>"+varMozo.userName+"</td>";
            dataFila +="<td>"+varMozo.estado+"</td>";
            dataFila +="<td>"+
                       "<button type='button' class='btn btn-warning'>EDITAR</button>"+
                       "</td>";
            dataFila +="</tr>";

        }
        document.getElementById("dataMozos").innerHTML = dataFila;
    }

}