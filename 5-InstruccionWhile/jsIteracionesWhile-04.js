/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let num
	let cont = 0

	while (cont == 0) {
		num = parseInt(prompt("Ingrese número aquí"));
		if (num >= 0 && num <= 9) {
			document.getElementById("txtIdNumero").value = num
			cont = 1
		}
		else {
			alert("Ese número no se encuentra entre 0 y 9");
			cont = 0
		}
	}




}//FIN DE LA FUNCIÓN