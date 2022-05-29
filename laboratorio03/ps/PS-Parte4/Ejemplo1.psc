Algoritmo Ejemplo1
	//definiendo variables
	Definir edad como entero;
	definir men como texto;
	//inicializando valores
	edad=0; men="";
	//capturando valores
	escribir "Ingrese tu edad:";
	leer edad;
	//condicion
	si (edad>=18) Entonces
		men="Eres mayor de edad";
	SiNo
		men="Eres menor de edad";
	FinSi
	//mostrando resultados
	escribir "La edad es: ",edad;
	escribir men;
FinAlgoritmo
