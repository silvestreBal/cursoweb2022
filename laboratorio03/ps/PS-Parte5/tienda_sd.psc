Algoritmo tienda_sd
	Escribir "Bienvenido al sistema de pedidos de la tienda: tec"
	Escribir "Por favor elija una opcion escribiendo el numero que corresponde al producto que deceé: "
	Escribir "1.- Celular......................Cost.70.00"
	Escribir "2.- Televisor....................Cost.55.00"
	Escribir "3.- Camara.......................Cost.60.00"
	Escribir "4.- Refrigeradora................Cost.90.00"
	Escribir "5.- Reloj........................Cost.40.00"
	Escribir "6.- Lavadora.....................Cost.70.00"
	Leer boca
	
	celu=70
	tele=55
	camar=60
	refri=90
	reloj=40
	lava=70
	acumula=0
	a=0
	b=0
	c=0
	d=0
	e=0
	f=0
	p=0
	Segun boca Hacer
		1:
			Escribir "Ha elegido Celular" 
			Escribir "Ingrese la cantidad: "
			Leer a
			acumula=acumula+celu*a
			p=p+a
		2:
			Escribir "Ha elegido Televisor" 
			Escribir "Ingrese la cantidad: "
			Leer b
			acumula=acumula+tele*b
			p=p+b
		3:
			Escribir "Ha elegido Camara" 
			Escribir "Ingrese la cantidad: "
			Leer c
			acumula=acumula+camar*c
			p=p+c
		4:
			Escribir "Ha elegido Refrigeradora" 
			Escribir "Ingrese la cantidad: "
			Leer d
			acumula=acumula+refri*d
			p=p+d
		5:
			Escribir "Ha elegido Reloj" 
			Escribir "Ingrese la cantidad: "
			Leer e
			acumula=acumula+reloj*e
			p=p+e
		6:
			Escribir "Ha elegido Lavadora" 
			Escribir "Ingrese la cantidad: "
			Leer f
			acumula=acumula+lava*f
			p=p+f
		De Otro Modo:
			Escribir "Opción no válida elija otro numero"
	FinSegun
	Escribir "la cuenta Total es: ", acumula
	Escribir " el total de la cantidad de productos es: ",p
	
FinAlgoritmo
