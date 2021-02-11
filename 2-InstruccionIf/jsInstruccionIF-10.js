function mostrar()
{
	let nota
	

	nota = Math.round((Math.random()*9) + 1);

	if (nota >= 9) {
		alert (`Su nota es ${nota} y es EXCELENTE`);
	}
	else if (nota >= 4) {
		alert (`Su nota es ${nota} usted APROBÓ`);
	}
	else  {
		alert (`Su nota es ${nota}. Vamos, la próxima se puede.`);
	}

}//FIN DE LA FUNCIÓN