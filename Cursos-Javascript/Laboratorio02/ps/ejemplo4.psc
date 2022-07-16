Algoritmo ejemplo4
	//inicializando variables
	Definir nh,ch,sb,bon,des,sf como real; 
	nh=0;ch=0;sb=0;bon=0;des=0;sf=0;
	//capturando valores
	escribir "ingresa el numero de horas trabajadas:";
	leer nh;
	escribir "ingresa el costo por horas trabajadas:";
	leer ch; 
	//realizando operaciones
	sb=nh*ch;
	bon=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	//mostrando resultados
	Escribir "El sueldo basico es: ",sb;
	Escribir "la bonificacion es: ",bon;
	Escribir "El descuento es: ",des;
	Escribir "El sueldo final es: ",sf;
FinAlgoritmo
