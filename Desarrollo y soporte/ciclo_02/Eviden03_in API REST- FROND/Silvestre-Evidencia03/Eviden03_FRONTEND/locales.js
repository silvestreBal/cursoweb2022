// FUNCION LISTAR
function listar(){

    console.log('ENTRANDO A LISTAR...');
    $.ajax({
        url: 'http://localhost:3999/api/locales',
        type: 'GET',
        success: function(respuesta){
            console.log(respuesta);
            var dataFila = '';
            var data = respuesta.dataLocales;
            if(data.length > 0){
                for( const i in data ){
                    var varItemLocal = data[i];
                    dataFila += "<tr>";
                    dataFila += "<td>"+varItemLocal.idLocal + "</td>";
                    dataFila += "<td>"+varItemLocal.distrito + "</td>";
                    dataFila += "<td>"+varItemLocal.direccion + "</td>";
                    dataFila += "<td>"+varItemLocal.telefono + "</td>";
                    dataFila += "<td>"+varItemLocal.horario + "</td>";
                    dataFila += "<td>"+varItemLocal.estado + "</td>";
                    dataFila += "<td>"+
                                "<button type='button' class='btn btn-outline-primary' > EDITAR </button>"
                                "</td>";

                    dataFila += "</tr>";
                }

                document.getElementById("dataLocales").innerHTML = dataFila;
            }
        }
    });


}

function guardar(){
    console.log('ENTRANDO A GUARDAR...');
    $.ajax({
        url: 'http://localhost:3999/api/locales/save',
        type: 'POST',
        data: {
            idLocal :  document.getElementById("txtIdLocal").value,//$("#txtIdProducto").val(),// tambien ->
            distrito: document.getElementById("txtDistrito").value,
            direccion: document.getElementById("txtDireccion").value,
            telefono: document.getElementById("txtTelefono").value,
            horario: document.getElementById("txtHorario").value,
            estado: document.getElementById("txtEstado").value
        },
        success: function(response) {
            console.log(response);
            listar();
        }
    });
}

function limpiar(){
    console.log('ENTRANDO A LIMPIAR..');
    document.getElementById("txtIdLocal").value = 0;
    document.getElementById("txtDistrito").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtHorario").value = "";
    document.getElementById("txtEstado").value = "";


}