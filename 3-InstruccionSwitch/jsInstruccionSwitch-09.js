function mostrar() {
  let estacion;
  let destino;
  let base;

  base = 15000;
  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Bariloche":
      if (estacion == "Invierno") {
        alert(`El precio es de $${base * 1.2}`);
      } else if (estación == "Verano") {
        alert(`El precio es de $${base * 0.8}`);
      } else {
        alert(`El precio es de $${base * 1.1}`);
      }
      break;
    case "Cataratas":
      if (estacion == "Invierno") {
        alert(`El precio es de $${base * 0.9}`);
      } else if (estación == "Verano") {
        alert(`El precio es de $${base * 1.1}`);
      } else {
        alert(`El precio es de $${base * 1.1}`);
      }
      break;
    case "Mar del plata":
      if (estacion == "Invierno") {
        alert(`El precio es de $${base * 0.8}`);
      } else if (estación == "Verano") {
        alert(`El precio es de $${base * 1.2}`);
      } else {
        alert(`El precio es de $${base * 1.1}`);
      }
      break;
    case "Cordoba":
      if (estacion == "Invierno") {
        alert(`El precio es de $${base * 0.9}`);
      } else if (estación == "Verano") {
        alert(`El precio es de $${base * 1.1}`);
      } else {
        alert(`El precio es de $${base}`);
      }
      break;
  }
  /*switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        alert(`El precio es de $${base * 1.2}`);
      } else if (destino == "Cataratas") {
        alert(`El precio es de $${base * 0.9}`);
      } else if (destino == "Mar del plata") {
        alert(`El precio es de $${base * 0.8}`);
      } else alert(`El precio es de $${base * 0.9}`);
      break;
    case "Verano":
      if (destino == "Bariloche") {
        alert(`El precio es de $${base * 0.8}`);
      } else if (destino == "Cataratas") {
        alert(`El precio es de $${base * 1.1}`);
      } else if (destino == "Mar del plata") {
        alert(`El precio es de $${base * 1.2}`);
      } else alert(`El precio es de $${base * 1.1}`);
      break;
    case "Otoño":
    case "Primavera":
      if (destino == "Bariloche") {
        alert(`El precio es de $${base * 1.1}`);
      } else if (destino == "Cataratas") {
        alert(`El precio es de $${base * 1.1}`);
      } else if (destino == "Mar del plata") {
        alert(`El precio es de $${base * 1.1}`);
      } else alert(`El precio es de $${base}`);
      break;
  }*/
} //FIN DE LA FUNCIÓN
