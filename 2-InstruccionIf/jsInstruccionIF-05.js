function mostrar()
{
	let edad

	edad=parseInt(document.getElementById("txtIdEdad").value);
 

	/*Condición es verdadera para los valores que están por debajo o por
	encima del rango [13,17] (Pregunto si estoy fuera del rango)*/
	if (13>edad || edad >17)
	{alert("No es adolescente");}

	/* Otra opción es preguntar si no estoy dentro del rango
	if (!(edad >= 13 && edad <=17)) {
		alert ("No es adolescente");
	}*/
}//FIN DE LA FUNCIÓN