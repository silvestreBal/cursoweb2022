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
