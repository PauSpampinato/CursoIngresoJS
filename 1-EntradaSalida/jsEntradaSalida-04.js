/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	//reservo espacio en memoria para la variable (nombre del usuario)
	let nombre;

	//guardo en la variable nombre el texto que escribió el usuario dentro de la ventana prompt
	nombre = prompt("Ingrese su nombre");
	// copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la página html
	document.getElementById("txtIdNombre").value = nombre;


}

