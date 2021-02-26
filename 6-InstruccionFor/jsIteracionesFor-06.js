function mostrar()
{
	let num
	let cont=0


	num=parseInt(prompt("Ingrese un número mayor a 1:"));
	for(let i=1; i<=num;i++){
		if(i%2==0){
			console.log(i);
			cont++
		}
	}
	console.log("Cantidad de pares encontrados: "+cont);


/* EL PROFE DICE QUE ESTO ES DE CHANTA ):
	for(pares =2;pares <=num; pares+=2){
		console.log(pares)
		cont++
		
	}
	console.log("La cantidad de números pares es: "+cont);
*/



}//FIN DE LA FUNCIÓN