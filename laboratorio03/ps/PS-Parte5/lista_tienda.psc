Algoritmo lista_tienda
	Repetir
		//mostrar menu
		Limpiar Pantalla
		Escribir "lista de Categorias"
		Escribir "  1. Celulares"
		Escribir "  2. Electrodom�sticos"
		Escribir "  3. Tv"
		Escribir "  4. Camaras"
		Escribir "  5. Salir"
		//ingresar una opci�n
		Escribir "Elija una opcion (1-5): "
		Leer OP
		//procesar esa opci�n
		Segun OP Hacer
			1:
				Escribir "lista de recomendaciones:"
				Escribir "  + Xiaomi POCO M4 PRO 5G"
				Escribir "  + Samsung Galaxy S10 Plus"
				Escribir "  + Xiaomi Redmi Note 11"
			2:
				Escribir "lista de recomendaciones:"
				Escribir "  + Refrigeradoras"
				Escribir "  + Lavadoras"
				Escribir "  + Electrodom�sticos"
			3:
				Escribir "lista de recomendaciones:"
				Escribir "  + Televisor 75�pulgadas LG NanoCell 4K"
				Escribir "  + Samsung QLED 49�pulgadas"
				Escribir "  + Televisor Xiaomi Mi Tv P1 43�pulgadas LM"
			4:
				Escribir "lista de recomendaciones:"
				Escribir "  + C�mara Digital Cybershot Sony DSC"
				Escribir "  + C�mara Canon EOS 90D"
				Escribir "  + C�mara Canon EOS T7"
			5:
				Escribir "Gracias, vuelva pronto"
			De Otro Modo:
				Escribir "Opci�n ni valida"
		FinSegun
		Escribir "Presione enter para continuar"
		Esperar Tecla
	Hasta Que OP=5
FinAlgoritmo
