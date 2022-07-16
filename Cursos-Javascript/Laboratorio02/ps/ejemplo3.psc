Algoritmo ejemplo3
	//definir variables
	definir pre,sbt,igv,tot como real;
	definir can como entero;
	//inicializando variables
	pre=0;sbt=0;igv=0;tot=0;
	//capturando valores
	escribir "ingresa el precio del producto:";
	leer pre;
	escribir "ingresa la cantidad a comprar del producto:";
	leer can; 
	//realizando operaciones
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	//mostrando resultados
	Escribir "El subtotal es: ",sbt;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
	
	
FinAlgoritmo
