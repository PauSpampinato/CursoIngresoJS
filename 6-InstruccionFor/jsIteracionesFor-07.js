function mostrar()
{

	let num
	let cont
	let contdiv=0

	num=parseInt(prompt("Ingrese un número: "));

	for(cont=0;cont<num;cont++){
		if (num%cont==0){
			contdiv++
			console.log(cont)
		}
	}
	console.log("Cantidad de divisores: "+contdiv)

}//FIN DE LA FUNCIÓN