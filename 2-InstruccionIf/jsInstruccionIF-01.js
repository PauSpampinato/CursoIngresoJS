function mostrar() {
	//tomo la edad  

	let edad
	let resultado

	edad = parseInt(document.getElementById("txtIdEdad").value)
	resultado = (edad == 15)

	if (resultado) {
		alert("niña bonita");
	}

	else 
{
		
	}
}//FIN DE LA FUNCIÓN
// No hace falta parsear porque == me compara los valores no los tipos
//si quiero que me compare el tipo también, tengo que usar el ===
//Igualmente, cuando pedimos un número siempre vamos a hacer el parseo
//(Just in case)