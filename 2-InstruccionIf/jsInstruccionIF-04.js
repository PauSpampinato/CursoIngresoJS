function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (13 <= edad && edad <= 17) {
    alert("Es adolescente");
  }

  /* Otra forma de expresarlo es con el operador not
	if (!(edad < 13 || edad > 17)) {
		alert ("Es adolescente");
	}*/
} //FIN DE LA FUNCIÓN
//No hace falta poner nada entre paréntesis porque los operadores
//relacionales tienen prioridad sobre los lógicos ya que estos necesitan
//de una variable booleana para operar.
