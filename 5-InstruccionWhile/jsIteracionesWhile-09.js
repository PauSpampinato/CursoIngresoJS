/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  //declaramos las variables
  let num;
  let max;
  let min;
  let seguir;
  let flag = 0;
  //armo un bucle del tipo mientras el usuario quiera (do while)
  do {
    //dentro del bucle....
    //pido un numero
    num = parseInt(prompt("Ingrese un numero"));
    //debo reconocer si estoy pidiendo por primera vez
    if (flag == 0) {
      //si es así, inicializo max y min
      max = num;
      min = num;
      flag = 1;
    }
    //caso contrario me fijo si tengo nuevo max o nuevo min
    //y los actualizo de ser necesario
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }

    seguir = prompt("Quiere ingresar otro número?");
  } while (seguir == `s`);
  //después del bucle
  //muestro la información(max y min)
  document.getElementById("txtIdMaximo").value = max;
  document.getElementById("txtIdMinimo").value = min;
} //FIN DE LA FUNCIÓN
