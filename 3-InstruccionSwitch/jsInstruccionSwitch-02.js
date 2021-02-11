function mostrar()
{
	let mes

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
	
		case "Julio":
		case "Agosto":
			alert ("Estamos en invierno");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert ("Ya pasó el invierno, ahora calor!");
			break;	
		default:	
			alert ("Falta para el invierno");
		}
	




}//FIN DE LA FUNCIÓN