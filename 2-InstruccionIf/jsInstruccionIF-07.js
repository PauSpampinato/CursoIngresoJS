function mostrar()
{
	let edad
	let estadociv

	edad= parseInt(document.getElementById("txtIdEdad").value);
	estadociv = document.getElementById("estadoCivil").value;


	if (edad < 18 && estadociv != "Soltero"){
		alert ("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN