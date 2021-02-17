/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let num = 0;
  let seguir = `s`; //puedo no inicializar esta variable usando do while
  let acumulador = 0;
  let i = 0;

  while (seguir == `s`) {
    num = parseInt(prompt("Ingrese un número"));
    acumulador = acumulador + num;
    i++;
    seguir = prompt("Quiere ingresar otro número?");
  }
  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador / i;

  /*let num = 0;
  let seguir = `s`;//puedo no inicializar esta variable usando do while
  let acumulador = 0;
  let i = 0;

   {
    num = parseInt(prompt("Ingrese un número"));
    acumulador = acumulador + num;
    i++;
    seguir = prompt("Quiere ingresar otro número?");
  }while (seguir == `s`);
  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador / i;*/

  /*
	let seguir=`s`;
	while (seguir == `s`){
		alert ("Hola");
		seguir = prompt("Quiere que lo vuelva a saludar?")
	}
alert ("Entonces ya no lo saludo más");*/
} //FIN DE LA FUNCIÓN
