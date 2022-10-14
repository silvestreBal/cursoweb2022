var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
    var tablaUsuario = [];
}

listar();

function listar(){
    console.log("Ingresando a listar...");
    //console.log(tablaPaciente);

    var dataFila = '';

    // LLENANDO LA TABLA
    if(tablaUsuario.length > 0){ // SI LA TABLA NO ESTA VACIA
        for(const i in tablaUsuario){
            var varUsuario =  JSON.parse(tablaUsuario[i]);
            dataFila +="<tr>";
            dataFila +="<td>"+varUsuario.idUsuario+"</td>";
            dataFila +="<td>"+varUsuario.apellidoNombre+"</td>";
            dataFila +="<td>"+varUsuario.userName+"</td>";
            dataFila +="<td>"+varUsuario.estado+"</td>";
            dataFila +="<td>"+
                       "<button type='button' class='btn btn-warning'>EDITAR</button>"+
                       "</td>";
            dataFila +="</tr>";

        }
        document.getElementById("dataUsuarios").innerHTML = dataFila;
    }

}