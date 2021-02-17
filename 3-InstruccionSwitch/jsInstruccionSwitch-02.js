function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

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
