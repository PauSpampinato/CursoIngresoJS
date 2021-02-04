/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	//declaro las variables
	let num1
	let num2
	let suma

	//tomo los números por Id.value
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	//los transformo a enteros
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	/*forma más directa de hacer los pasos anteriores
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value)
	*/

	//defino la variable suma como la suma de las otras dos variables
	suma = num1 + num2;

	//hago alert concatenando literal de cadena con la variable suma 
	alert("La suma es " + suma);



}

