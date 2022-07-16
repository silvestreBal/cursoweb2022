Algoritmo ejemplo3
	//definir variables
	Definir n1,n2,prom como real;
	definir men como texto;
	//inicializando variables
	n1=0;n2=0;prom=0;men="";
	//capturando valores
	Escribir "Ingrese nota1:";
	leer n1;
	Escribir "Ingrese nota2:";
	leer n2;
	//realizando operaciones
	prom=(n1+n2)/2;
	//condicion
	si(prom>=13) Entonces
		men="Aprobado";
		
	FinSi
	//mostrando resultados
	escribir "El promedio es: ",prom;
	escribir men;
	
FinAlgoritmo
