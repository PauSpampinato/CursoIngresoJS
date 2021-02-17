function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
    case "Ushuaia":
      alert("Acá hace frío");
      break;
    case "Cataratas":
    case "Mar del plata":
      alert("Acá hace calor");
      break;
  }
} //FIN DE LA FUNCIÓN
