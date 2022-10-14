var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente = JSON.parse(tablaPaciente);
if (tablaPaciente == null) {
    var tablaPaciente = [];
}


function listar(){
    console.log("Ingresando a listar...");
    //console.log(tablaPaciente);

    var dataFila = '';

    // LLENANDO LA TABLA
    if(tablaPaciente.length > 0){ // SI LA TABLA NO ESTA VACIA
        for(const i in tablaPaciente){
            var varPaciente =  JSON.parse(tablaPaciente[i]);
            dataFila +="<tr>";
            dataFila +="<td>"+varPaciente.idPaciente+"</td>";
            dataFila +="<td>"+varPaciente.nombApellido+"</td>";
            dataFila +="<td>"+varPaciente.dni+"</td>";
            dataFila +="<td>"+varPaciente.telefono+"</td>";
            dataFila +="<td>"+varPaciente.direccion+"</td>";
            dataFila +="<td>"+varPaciente.estado+"</td>";
            dataFila +="<td>"+
                       "<button type='button' class='btn btn-warning'>EDITAR</button>"+
                       "</td>";
            dataFila +="</tr>";

        }
        document.getElementById("dataPacientes").innerHTML = dataFila;
    }

}
