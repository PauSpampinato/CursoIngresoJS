/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value;

//nombre = txtIdNombre.value; alternativa a la versión de arriba


	alert(nombre);

/*document.getElementById("txtIdNombre").value = ""; cómo hacer que el nombre
desaparezca del cuadro de texto al tocar aceptar en el alert*/

}


