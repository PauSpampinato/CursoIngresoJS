function mostrar() {
  let num;
  let acumulador = 0;
  let promedio;
  let i = 0;

  while (i < 5) {
    num = parseInt(prompt("Ingrese un número"));
    acumulador = acumulador + num;
    i++;
  }
  promedio = acumulador / 5;

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = promedio;

  /*let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let suma;
	let promedio;

	num1=parseInt(prompt ("Ingrese un número"));
	num2=parseInt(prompt ("Ingrese un número"));
	num3=parseInt(prompt ("Ingrese un número"));
	num4=parseInt(prompt ("Ingrese un número"));
	num5=parseInt(prompt ("Ingrese un número"));

	suma = num1 + num2 + num3+num4+num5;
	promedio = suma /5;

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;*/
} //FIN DE LA FUNCIÓN
