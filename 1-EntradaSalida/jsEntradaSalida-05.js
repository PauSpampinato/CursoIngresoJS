/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  //consigo espacio en memoria
  let nombre;
  let edad;

  //consigo el dato de la variable desde el cuadro de texto para cada variable
  nombre = document.getElementById("txtIdNombre").value;
  edad = document.getElementById("txtIdEdad").value;

  //hago un alert concatenando una frase (literal de cadena) con las variables
  //alert ("Usted se llama "+ nombre +  " y tiene " + edad + " años");

  //forma más fácil de hacerlo
  alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}
