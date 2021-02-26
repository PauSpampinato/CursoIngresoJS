function mostrar()
{

	//CUAL ES EL MAYOR NUMERO
	let num
	let mayor
	let posMayor;

	for(let i=0;i<3;i++){
		numero=parseInt(prompt("Ingrese un número: "));

		if (i==0||num>mayor){
			mayor=numero;
			posMayor=i+1
		}
	}

	alert("El mayor es "+ mayor + " en la posición "+posMayor)

}//FIN DE LA FUNCIÓN