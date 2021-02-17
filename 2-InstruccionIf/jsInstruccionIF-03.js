function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad >= 18) {
    alert("Es mayor de edad");
  } else {
    alert("Es menor de edad");
  }

  //Estaría mal usar 2 if (ver 21:57hs) (lo explico en los apuntes)
} //FIN DE LA FUNCIÓN
