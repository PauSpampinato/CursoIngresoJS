function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

<<<<<<< HEAD
  switch (mes) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
      alert("Falta para el invierno");
      break;
    case "Julio":
    case "Agosto":
      alert("Estamos en invierno");
      break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      alert("Ya pasó el invierno, ahora calor!");
      break;
  }
} //FIN DE LA FUNCIÓN
=======
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
>>>>>>> a965f7c832b65cc304d65f57cec57dc1dfb5e71f
