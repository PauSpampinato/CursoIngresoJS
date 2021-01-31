/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

/*Quise definir las variables antes de las funciones pero no me dejó
let num1
let num2
let suma
let resta
let mult
let div

num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
num2 = parseInt(document.getElementById("txtIdNumeroDos").value)
*/

function sumar() {
	let num1
	let num2
	let suma
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value)
	suma = num1 + num2
	alert("La suma es "+suma)
}

function restar() {

	let num1
	let num2
	let resta

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value)
	resta = num1 - num2
	alert("La resta es "+resta)
}

function multiplicar() {
	let num1
	let num2
	let mult

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value)
	mult = num1 * num2
	alert("La multiplicación es "+mult)
}

function dividir() {
	let num1
	let num2
	let div

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value)
	div = num1 / num2
	alert("La división es "+div)
}

