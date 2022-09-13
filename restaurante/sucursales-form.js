function guardar(){
    console.log("PRESIONO GUARDAR...");

    var objSucursal = JSON.stringify({
        idLocal   : document.getElementById("txtIdLocal").value,
        lugares : document.getElementById("txtLugares").value,
        direccion : document.getElementById("txtDireccion").value,
        telefono : document.getElementById("txtTelefono").value,
        horario : document.getElementById("txtHorario").value,
        estado : document.getElementById("cboEstado").value,

    });

    console.log(objSucursal);


    var tablaSucursal = localStorage.getItem("tablaSucursalStorage");
    tablaSucursal = JSON.parse(tablaSucursal);
    if(tablaSucursal == null){
        var tablaSucursal = [];
    }

    tablaSucursal.push(objSucursal);
    localStorage.setItem("tablaSucursalStorage", JSON.stringify(tablaSucursal));
    window.location.replace("sucursales.html");// REGRESAR A Sucursales.HTML

}