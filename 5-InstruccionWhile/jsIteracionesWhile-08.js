/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let num;
  let numpos = 0;
  let numneg = 1;
  let seguir;
  let flag = 0;

  do {
    num = parseInt(prompt("Ingrese un número"));
    if (num >= 0) {
      numpos = numpos + num;
    } else {
      flag = 1;
      numneg = numneg * num; //según esto, si el usuario no ingresa num
      //negativos, este producto va a dar 1. (No es correcto)
    }
    seguir = prompt("Quiere ingresar otro número?");
  } while (seguir == `s`);

  if (flag == 0) {
    numneg = 0;
  }

  document.getElementById("txtIdSuma").value = numpos;
  document.getElementById("txtIdProducto").value = numneg;
} //FIN DE LA FUNCIÓN
