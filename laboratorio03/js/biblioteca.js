//creamos las funciones para calcular
function CalcularSuma(num1,num2) {
    return num1 + num2;
}
function CalcularResta(num1,num2) {
    return num1 - num2;
}
function CalcularMultiplicacion(num1,num2) {
    return num1 * num2;
}
function CalcularDivision(num1,num2) {
    return num1 / num2;
}
//creamos un procedimiento para calcular
function Calcular() {
//definimos controles
    txtN1=document.getElementById("txtN1");
    txtN2=document.getElementById("txtN2");
    txtSum=document.getElementById("txtSum");
    txtRes=document.getElementById("txtRes");
    txtMul=document.getElementById("txtMul");
    txtDiv=document.getElementById("txtDiv");
    if (txtN1.value == "") {
        alert("Ingresa el numero 1");
        txtN1.focus();
    } else if (txtN2.value == "") {
        alert("Ingresa el numero 2");
        txtN2.focus();
    } else {
        //declarando variables
        var n1 = 0,
            n2 = 0,
            sum = 0,
            res = 0,
            mul = 0,
            div = 0;
        //capturando valores
        n1 = parseFloat(txtN1.value);
        n2 = parseFloat(txtN2.value);
        //realizando operaciones
        sum = CalcularSuma(n1, n2);
        res = CalcularResta(n1, n2);
        mul = CalcularMultiplicacion(n1, n2);
        div = CalcularDivision(n1, n2);
        //mostrando resultados
        txtSum.value = sum;
        txtRes.value = res;
        txtMul.value = mul;
        txtDiv.value = div;
    }
}
//creamos ls funciones
function CalculaSueldoBasico(h, c) {
    return h * c;
}
function CalculaBonificacion(s) {
    return s * 0.09;
}
function CalculaDescuento(s) {
    return s * 0.06;
}
function CalculaSueldoFinal(s, b, d) {
    return s + b -  d;
}
function CalcularSueldo() {
    //declarando controles
    txtNh=document.getElementById("txtNh");
    txtCh=document.getElementById("txtCh");
    txtSb=document.getElementById("txtSb");
    txtBon=document.getElementById("txtBon");
    txtDes=document.getElementById("txtDes");
    txtSf=document.getElementById("txtSf");
    if(txtNh.value==""){
        alert("Ingresa el numero de horas");
        txtNh.focus();
    }else if(txtCh.value==""){
        alert("Ingresa el costo por hora");
        txtCh.focus();
    } else {
        //declarando variables
        var nh = 0,
        ch = 0,
        sb = 0,
        bon = 0,
        des = 0,
        sf = 0;
        //capturando valores
        nh = parseFloat(txtNh.value);
        ch = parseFloat(txtCh.value);
        //realizando operaciones
        sb = CalculaSueldoBasico(nh, ch);
        bon = CalculaBonificacion(sb);
        des = CalculaDescuento(sb);
        sf = CalculaSueldoFinal(sb, bon, des);
        //mostrando resultados
        txtSb.value = sb;
        txtBon.value = bon;
        txtDes.value = des;
        txtSf.value = sf;
    }
}

//funcion para el mensaje de la edad
function EvaluaEdad(e){
    var m="";
    if(e>=18){
        m="Eres mayor de edad";
    }else{
        m="Eres menor de edad";
    }
    return m;
}
function MostrarMensaje() {
    //declara los controles
    txtEdad = document.getElementById("txtEdad");
    txtMen = document.getElementById("txtMen");

    if (txtEdad.value == "") {
        alert("Ingresa la edad:");
        txtEdad.focus();
    }   else {
        var edad = 0,
        men = "";
        edad = parseInt(txtEdad.value);
        men = EvaluaEdad(edad);
        txtMen.value = men;
    }
}

//funcion para calcular la bonificacion
function CalcularBonificacion(c,s){
    var b=0;
    if(c=="a"){
        b=s*0.03;
    }else if(c=="b"){
        b=s*0.05;
    }else if(c=="c"){
        b=s*0.07;
    }else if(c=="d"){
        b=s*0.09;
    }else{
        b=0;
    }
    return b;
}
function CalculaDescuento(s) {
    return s * 0.05;
}
function CalculaSueldoF(s, b, d) {
    return s * b - d;
}
function CalculaSueldoFinal() {
    //declarando los controles
    txtSb=document.getElementById("txtSb");
    rbA=document.getElementById("rbA");
    rbB=document.getElementById("rbB");
    rbC=document.getElementById("rbC");
    rbD=document.getElementById("rbD");
    txtBon=document.getElementById("txtBon");
    chkTar=document.getElementById("chkTar");
    txtDes=document.getElementById("txtDes");
    txtSf=document.getElementById("txtSf");
    if(txtSb.value==""){
        alert("Ingrese el sueldo basico");
    }else if(rbA.checked==false && rbB.checked==false && rbC.checked==false && rbD.checked==false){
        alert("Ingrese el sueldo basico");
        rbA.focus();
    }else {
            var sb = 0,
              bon = 0,
              des = 0,
              sf = 0;
            sb = parseFloat(txtSb.value);
            if (rbA.checked == true) {
              bon = CalcularBonificacion("a", sb);
            } else if (rbB.checked == true) {
              bon = CalcularBonificacion("b", sb);
            } else if (rbC.checked == true) {
              bon = CalcularBonificacion("c", sb);
            } else if (rbD.checked == true) {
              bon = CalcularBonificacion("d", sb);
            } else {
              bon = 0;
            }
            if (chkTar.checked == true) {
              des = CalcularDescuento(sb);
            } else {
              des = 0;
            }
            sf = CalcularSueldoF(sb, bon, des);
            //mostrando resultados
            txtBon.value = bon;
            txtDes.value = des;
            txtSf.value = sf;
        }
}