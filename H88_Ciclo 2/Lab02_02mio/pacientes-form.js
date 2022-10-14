function guardar(){
    console.log("PRESIONO GUARDAR...");

    var objPaciente = JSON.stringify({
        idPaciente   : document.getElementById("txtIdPaciente").value,
        nombApellido : document.getElementById("txtNombApellido").value,
        dni : document.getElementById("txtDni").value,
        telefono : document.getElementById("txtTelefono").value,
        direccion : document.getElementById("txtDireccion").value,
        estado : document.getElementById("cboEstado").value

    });

    console.log(objPaciente);
    

    var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
    tablaPaciente = JSON.parse(tablaPaciente);
    if(tablaPaciente == null){
        var tablaPaciente = [];
    }

    tablaPaciente.push(objPaciente);
    localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));
    window.location.replace("pacientes.html");// REGRESAR A PACIENTES.HTML

}