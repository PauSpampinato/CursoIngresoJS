/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero
	let seguir
	let acumPos = 0;
	let acumNeg = 0;
	let contPos = 0;
	let contNeg = 0;
	let contCeros = 0;
	let contPares = 0;
	let promPos;
	let promNeg;
	let diferencia;

	do {
		//pido y valido el numero
		numero = parseInt(prompt("Ingrese un número: "))
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un número: "))

		}
		//hago las cosas que dependen del signo del numero
		if (numero > 0) {
			acumPos = acumPos + numero;
			contPos++
		}
		else if (numero < 0) {
			acumNeg = acumNeg + numero;
			contNeg++
		}
		else {
			contCeros++
		}
		//hago las cosas que dependen de la paridad del numero
		if (numero % 2 == 0) {
			contPares++
		}

		seguir = prompt("Quiere ingresar otro numero?")

	} while (seguir == 's');

	/*para hacer renglones en alert uso "/n", para hacer
	renglones en document.write uso "<br>"*/

	promPos = acumPos / contPos;
	promNeg = acumNeg / contNeg;

	diferencia = contPos - contNeg;

	document.write("1- Suma de los negativos: " + acumNeg + "<br>")
	document.write("2- Suma de los positivos: " + acumPos + "<br>")
	document.write("3- Cantidad de positivos: " + contPos + "<br>")
	document.write("4- Cantidad de negativos: " + contNeg + "<br>")
	document.write("5- Cantidad de ceros: " + contCeros + "<br>")
	document.write("6- Cantidad de numeros pares: " + contPares + "<br>")
	document.write("7- Promedio de positivos: " + promPos + "<br>")
	document.write("8- Promedio de negativos: " + promNeg + "<br>")
	document.write("9- Diferencia entre positivos y negativo: " + diferencia + "<br>")
}//FIN DE LA FUNCIÓN