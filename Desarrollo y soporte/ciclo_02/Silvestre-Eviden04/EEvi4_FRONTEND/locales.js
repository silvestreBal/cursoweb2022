// FUNCION LISTAR
function listar(){
    Swal.fire({
        title:'LISTA DE LOCALES',
        html:'<b>Cargando...</b>',
        didOpen:() =>{
            Swal.showLoading()
        }
    });

    //console.log('ENTRANDO A LISTAR...');
    $.ajax({
        url: 'http://localhost:3999/api/locales',
        type: 'GET',
        success: function(respuesta){
            Swal.close();
            //console.log(respuesta);
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
                    dataFila += "<td>" + varItemLocal.categoria[0].nomCategoria + "</td>";
                    dataFila += "<td>"+
                        "<button type='button' class='btn btn-outline-primary' data-toggle='modal' data-target='#modalLocal' onclick='buscar("
                        + varItemLocal.idLocal
                        + ")'> EDITAR </button>"
                    "</td>";

                    dataFila += "</tr>";
                }

                document.getElementById("dataLocales").innerHTML = dataFila;
            }
        }
    });


}

function guardar(){
    //console.log('ENTRANDO A GUARDAR...');
    Swal.fire({
        title: 'Esta seguro que quieres guardar los campos?',
        showDenyButton:true,
       // showCancelButton:true,
        confirmButtonText:'SI',
        denyButtonText:`NO`
    }).then((result)=>{
        if(result.isConfirmed){
            $.ajax({
                url: 'http://localhost:3999/api/locales/save',
                type: 'POST',
                data: {
                    idLocal :  document.getElementById("txtIdLocal").value,//$("#txtIdProducto").val(),// tambien ->
                    distrito: document.getElementById("txtDistrito").value,
                    direccion: document.getElementById("txtDireccion").value,
                    telefono: document.getElementById("txtTelefono").value,
                    horario: document.getElementById("txtHorario").value,
                    estado: document.getElementById("txtEstado").value,
                    idCategoria: document.getElementById("cboCategoria").value
                },
                success: function(response) {
                    //console.log(response);
                    listar();
                }
            });

            Swal.fire('Se guardaron los cambios','','info');
        }else if (result.isDenied){
            Swal.fire('Cambios no guardados','','info');
        }
    });
}

function limpiar(){
    //console.log('ENTRANDO A LIMPIAR..');
    console.log('ENTRANDO A LIMPIAR..');
    document.getElementById("txtIdLocal").value = 0;
    document.getElementById("txtDistrito").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtHorario").value = "";
    document.getElementById("txtEstado").value = "";
    cargarCategorias();

}

function buscar(idLocal) {
    // console.log('idLocal:'+idLocal);
    cargarCategorias(); // CORREGIR PROMESAS
    $.ajax({
        url: 'http://localhost:3999/api/locales/' + idLocal,
        type: 'GET',
        success: function (respuesta) {
            // console.log(respuesta);
            var varLocal = respuesta.local;
            document.getElementById("txtIdLocal").value = varLocal.idLocal;
            document.getElementById("txtDistrito").value = varLocal.distrito;
            document.getElementById("txtDireccion").value = varLocal.direccion;
            document.getElementById("txtTelefono").value = varLocal.telefono;
            document.getElementById("txtHorario").value = varLocal.horario;
            document.getElementById("txtEstado").value = varLocal.estado;
            document.getElementById("cboCategoria").value = varLocal.idCategoria;
        }

    });

}

function cargarCategorias(){
    $.ajax({
        url:'http://localhost:3999/api/categoria',
        type:'GET',
        success: function(respuesta){
            //console.log(respuesta);
            var dataFila  = '';
            var dataCategorias = respuesta.dataCategorias;
            if(dataCategorias.length > 0){
                //dataFila += "<option value='0'> -- SELECCIONE -- <option> ";
                for(const i in dataCategorias){
                    var itemCategoria = dataCategorias[i];
                    dataFila += "<option value='"+itemCategoria.idCategoria+"'>"+
                                    itemCategoria.nomCategoria
                               +"</option>";
                }
                document.getElementById("cboCategoria").innerHTML = dataFila;
            }
        }
    });
}

function cargarReporte(){
    const ctx = document.getElementById('myChart');
    var listaEtiquetas = [];
    var listaDatos = [];
    
    $.ajax({
        url:'http://localhost:3999/api/locales/reporte/byCategoria',
        type:'GET',
        success: function(respuesta){
          var dataReporte = respuesta.dataReporteByCategoria;
          if(dataReporte.length > 0){// SI HAY DATOS
            for(const i in dataReporte){
              //console.log(dataReporte[i].categoria[0]);
              listaEtiquetas.push(dataReporte[i].categoria[0]);
              //console.log(dataReporte[i].count);
              listaDatos.push(dataReporte[i].count);
            }
            var myChart = new Chart(ctx,{
              type: 'bar',
              data:{
                labels: listaEtiquetas,
                datasets: [{
                  label:'CATEGORIAS',
                  data: listaDatos,
                  backgroundColor:[
                    'slateblue','dodgerblue','aqua'
                  ],
                  borderColor:[
                    'black'
                  ],
                  borderWidht: 1
                }]
              },
              options:{
                scales: {
                  y: {beginAtZero: true}
                }
              }
            });
          }
        }
    });
    

}

function descargarReporte(){
    console.log('Entrando a la funcion descargarReporte');
    Swal.fire({
        title:'LISTA DE PRODUCTOS',
        html:'<b>Descargando...</b>',
        didOpen:() =>{
            Swal.showLoading()
        }
    });

    $.ajax({
        url: 'http://localhost:3999/api/locales',
        type: 'GET',
        success: function (respuesta) {
            Swal.close();
            var dataLocales = respuesta.dataLocales;
            if(dataLocales.length > 0){
                var documento = new jsPDF();
                var columnas = ["IDLOCAL","DISTRITO","DIRECCION","TELEFONO","HORARIO","ESTADO","CATEGORIA"];
                var filas = [];
                for(var i = 0; i < dataLocales.length; i++){
                    var varItemLocal = dataLocales[i];
                    var temp = [varItemLocal.idLocal, 
                                varItemLocal.distrito, 
                                varItemLocal.direccion,
                                varItemLocal.telefono,
                                varItemLocal.horario,
                                varItemLocal.estado,
                                varItemLocal.categoria[0].nomCategoria
                               ];
                    filas.push(temp);
                }

                documento.autoTable(columnas, filas);
                documento.text('LISTA DE PRODUCTOS',75,10);
                documento.setFontSize(8);
                documento.save('listaProductos.pdf');
            }
        }
    });


}