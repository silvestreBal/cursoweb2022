
function guardar(){
    console.log("ENTRANDO A LA FUNCION GUARDAR...");

    var objMozo = JSON.stringify({
        idMozo   : document.getElementById("txtIdMozo").value,
        apellidoNombre : document.getElementById("txtApellidoNombre").value,
        userName : document.getElementById("txtUserName").value,
        //password : document.getElementById("txtPassword").value,
        estado : document.getElementById("cboEstado").value
    });


    console.log(objMozo);


    var tablaMozo = localStorage.getItem("tablaMozoStorage");
    tablaMozo = JSON.parse(tablaMozo);
    if(tablaMozo == null){
        var tablaMozo = [];
    }

    tablaMozo.push(objMozo);// AGREGANDO Mozo A LA TABLA STORAGE
    localStorage.setItem("tablaMozoStorage", JSON.stringify(tablaMozo));
    window.location.replace("mozos.html");// REGRESAR A mozos.HTML

}