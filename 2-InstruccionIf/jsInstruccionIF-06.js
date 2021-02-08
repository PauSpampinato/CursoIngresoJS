function mostrar()
{
	let edad

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13){
		alert("Es niño");
	}
	else {
		if(edad >=13 && edad <=17){
			alert ("Es adolescente");
		}
		else {
			alert("Es adulto");
		}
	}

/* También podrían pedirme una condición más como que si es mayor de 65
diga que es anciano. En ese caso se agrega otro if dentro del último else.
Queda más ordenado escribir else if continuo.

}//FIN DE LA FUNCIÓN