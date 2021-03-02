
function mostrar()
{
	let carga;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let flagalcoholbarato=0;
	let precioalcoholbarato;
	let cantidadalcoholbarato;
	let fabricantealcoholbarato;
	let contbarbijo=0;
	let contjabon=0;
	let contalcohol=0;
	let acumcantbarbijo=0;
	let acumcantalcohol=0;
	let acumcantjabon=0;
	let promedio;

	for(carga=0;carga<5;carga++){
		tipo=prompt("Ingrese el tipo (barbijo/jabón/alcohol): ");
		while(!(tipo=="barbijo"||tipo=="jabón"||tipo=="alcohol")){
			tipo=prompt("Ese tipo no es válido. Reingrese el tipo (barbijo/jabón/alcohol): ");

		}
		precio=parseInt(prompt("Ingrese el precio (entre 100 y 300): "));
		while(!(precio>=100&&precio<=300)){
			precio=parseInt(prompt("El precio no es válido. Reingrese el precio (entre 100 y 300): "));

		}
		cantidad=parseInt(prompt("Ingrese cantidad (entre 1 y 1000):"));
		while (cantidad<=0||cantidad >1000){
			cantidad=parseInt(prompt("Cantidad no válida. Reingrese cantidad (entre 1 y 1000):"));

		}
		marca = prompt("Ingrese marca:");
		fabricante=prompt("Ingrese fabricante:");

		switch(tipo){
			case "barbijo":
				contbarbijo++
				acumcantbarbijo+=cantidad
				break;
			case "jabón":
				contjabon++
				acumcantjabon+=cantidad
				break;
			case "alcohol":
				contalcohol++
				acumcantalcohol+=cantidad
				if (flagalcoholbarato==0){
					precioalcoholbarato=precio
					cantidadalcoholbarato=cantidad
					fabricantealcoholbarato=fabricante
					flagalcoholbarato==1
				}
				else if(precio <precioalcoholbarato){
					precioalcoholbarato=precio
					cantidadalcoholbarato=cantidad
					fabricantealcoholbarato=fabricante
				}
				break;		
		}
	}
	if (acumcantalcohol>acumcantbarbijo&&acumcantalcohol>acumcantjabon){
		promedio=acumcantalcohol/contalcohol
	}
	else if (acumcantbarbijo>=acumcantalcohol&&acumcantbarbijo>acumcantjabon){
		promedio=acumcantbarbijo/contbarbijo
	}
	else {
		promedio=acumcantjabon/contjabon
	}

	console.log(`a. Las cantidad de unidades del más barato de los alcoholes es ${cantidadalcoholbarato} y el fabricante es ${fabricantealcoholbarato}`);
	console.log(`b. El promedio por compra del tipo con más unidades es ${promedio}`);
	console.log(`c. La cantidad total de unidades de jabón es ${acumcantjabon}`);
	
}
