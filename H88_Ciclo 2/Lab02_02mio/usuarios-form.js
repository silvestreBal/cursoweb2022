function guardar(){
    console.log("ENTRANDO A LA FUNCION GUARDAR...");

    var objUsuario = JSON.stringify({
        idUsuario   : document.getElementById("txtIdUsuario").value,
        apellidoNombre : document.getElementById("txtApellidoNombre").value,
        username : document.getElementById("txtUserName").value,
        //password : document.getElementById("txtPassword").value,
        estado : document.getElementById("cboEstado").value
        

    });

    console.log(objUsuario);


    var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
    tablaUsuario = JSON.parse(tablaUsuario);
    if(tablaUsuario == null){
        var tablaUsuario = [];
    }

    tablaUsuario.push(objUsuario);
    localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
    window.location.replace("usuarios.html");// REGRESAR A usuarios.HTML
}