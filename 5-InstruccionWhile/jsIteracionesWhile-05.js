/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo
	let cont = 0

	while (cont == 0) {
		sexo = prompt("Ingrese su sexo: ('f' para femenino o 'm' para masculino)");
		if (sexo == "f" || sexo == "m") {
			document.getElementById("txtIdSexo").value = sexo
			cont = 1
		}
		else {
			alert("Ese sexo no existe");
			cont = 0
		}
	}


	
}//FIN DE LA FUNCIÓN