/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
  let sexo;

  //pido el dato
  sexo = prompt("Ingrese su sexo: ('f' para femenino o 'm' para masculino)");

  while (!(sexo == "f" || sexo == "m")) {
    sexo = prompt(
      "Sexo invalido. Reingrese su sexo: ('f' para femenino o 'm' para masculino"
    );
  }

  document.getElementById("txtIdSexo").value = sexo;

  /*
	let cont = 0

	while (cont == 0) {
		sexo = prompt("Ingrese su sexo: ('f' para femenino o 'm' para masculino)");
		if (sexo == "f" || sexo == "m") {
			document.getElementById("txtIdSexo").value = sexo
			cont = 1
		}
		else {
			alert("El sexo es invalido");
			cont = 0
		}
	}*/
} //FIN DE LA FUNCIÓN
