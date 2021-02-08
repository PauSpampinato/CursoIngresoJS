/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numerosecreto


function comenzar() {
  
  numerosecreto = Math.round((Math.random() * 99) + 1)
  alert(numerosecreto);

}

function verificar() {
  
  let numero
  let intentos

  
  alert(numerosecreto);
  numero = parseInt(document.getElementById("txtIdNumero").value);

  if (numero == numerosecreto) {
    alert("Usted es un ganador!! Y en solo X intentos.");
  }
  else if (numero < numerosecreto) {
    alert("Falta...")
  }
  else {
    alert("Se pasó...")
  }




}