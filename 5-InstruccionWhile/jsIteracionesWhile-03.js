/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  let clave;
  let intento;

  clave = prompt("Ingrese la clave: ");
  while (clave != "utn750") {
    clave = prompt("Clave inválida. Reingrese clave: ");
  }
  alert("Clave válida!");
  /*
  clave = "utn750";
  intento = prompt("Ingrese la clave aquí");
  while (intento != clave) {
    alert("La clave es incorrecta");
    intento = prompt("Ingrese la clave aquí");
  }*/
} //FIN DE LA FUNCIÓN
