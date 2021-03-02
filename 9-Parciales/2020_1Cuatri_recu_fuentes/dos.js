function mostrar()
{
  	/*2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado*/

//declarar variables
	let tipo;
	let nombre;
	let importe;
	let procedencia;
	let peso;
	let contprodu=0;
	let acumprecioprodu=0;
	let flagpeso=0;
	let pesomax;
	let nombrepesomax;
	let flagpreciolimp=0;
	let maxpreciolimp;
	let nombremaxpreciolimp;
	let flagpreciocomest=0;
	let maxpreciocomest;
	let nombremaxpreciocomest;
	let flagpreciootros=0;
	let maxpreciootros;
	let nombremaxpreciootros;
	let flagprecio=0;
	let preciomax;
	let nombrepreciomax;
	let flagelab=0;
	let preciomin;
	let nombrepreciomin;
	let contlimpieza=0;
	let contcomest=0;
	let contotros=0;
	let contimportado=0;
	let contnacional=0;
	let contelab=0;
	let porcentajeelab;
	let acumpesolimp=0;
	let acumpesocomest=0;
	let acumpesootros=0;
	let promediopesolimp;
	let promediopesocomest;
	let promediopesootros;
	let seguir;


	//hacer un bucle del tipo hasta que el usuario quiera
	do {
		//pedir variables y validarlas
		tipo=prompt("Ingrese el tipo:");
		while(!(tipo=="limpieza"||tipo=="comestibles"||tipo=="otros")){
			tipo=prompt("No es un tipo válido. Reingrese el tipo:");
			
		}
		nombre=prompt("Ingrese el nombre:");
		importe=parseInt(prompt("Ingrese el importe: "));
		while(importe>1000){
			importe=parseInt(prompt("El importe no debe superar los $1000. Reingrese el importe: "));

		}
		procedencia=prompt("Ingrese la procedecia");
		while(!(procedencia=="importado"||procedencia=="nacional"||procedencia=="elaborado")){
			procedencia=prompt("No es una procedencia válida. Reingrese la procedencia:");
			
		}
		peso=parseInt(prompt("Ingrese el peso:"));
		while(peso>30){
			peso=parseInt(prompt("El peso no debe superar los 30kg. Reingrese el peso: "));

		}

		switch(tipo){
			case "limpieza":
				contlimpieza++
				if (flagpreciolimp==0){
					maxpreciolimp=importe
					nombremaxpreciolimp=nombre
					flagpreciolimp=1
				}
				else if(importe>maxpreciolimp){
					maxpreciolimp=importe
					nombremaxpreciolimp=nombre
				}
				
				acumpesolimp=acumpesolimp+peso
				break;
				
			case "comestibles":
				contcomest++
				if(flagpeso==0){
					pesomax=peso
					nombrepesomax=nombre
					flagpeso=1
				}
				else if(peso>pesomax){
					pesomax=peso
					nombrepesomax=nombre
				}
				if (flagpreciocomest==0){
					maxpreciocomest=importe
					nombremaxpreciocomest=nombre
					flagpreciocomest=1
				}
				else if(importe>maxpreciocomest){
					maxpreciocomest=importe
					nombremaxpreciocomest=nombre
				}
				
				acumpesocomest=acumpesocomest+peso
				break;
				
			case "otros":
				contotros++
				if (flagpreciootros==0){
					maxpreciootros=importe
					nombremaxpreciootros=nombre
					flagpreciootros=1
				}
				else if(importe>maxpreciootros){
					maxpreciootros=importe
					nombremaxpreciootros=nombre
				}
				
				acumpesootros=acumpesootros+peso
				break;
				
		}
		switch(procedencia){
			case "importado":
				contimportado++
				break;
			case "nacional":
				contnacional++
				break;
			case "elaborado":
				contelab++
				if (flagelab==0){
					preciomin=importe
					nombrepreciomin=nombre
					flagelab=1
				}
				else if(importe<preciomin){
					preciomin=importe
					nombrepreciomin=nombre
				}
				break;		
		}


		seguir=prompt("Desea ingresar otro producto?: ")
	}while(seguir=='s')
	
	if (contcomest!=0){
		console.log(`El comestible más pesado es ${nombrepesomax} y pesa ${pesomax}`)
	}
	if(maxpreciolimp>maxpreciocomest&&maxpreciolimp>maxpreciootros){
		console.log (`El producto más caro es ${nombremaxpreciolimp}`)
	}
	else if(maxpreciocomest>maxpreciootros){
		console.log (`El producto más caro es ${nombremaxpreciocomest}`)
		
	}
	else{
		console.log (`El producto más caro es ${nombremaxpreciootros}`)

	}
	if (contelab!=0){
	console.log(`El más barato de los elaborados es ${nombrepreciomin}`);
	}
	if(contlimpieza>contcomest&&contlimpieza>contotros){
		console.log (`El tipo que más aparece es limpieza `)
	}
	else if(contcomest>contotros){
		console.log (`El tipo que más aparece es comestibles`)
		
	}
	else{
		console.log (`El tipo que más aparece es otros`)}

	porcentajeelab=contelab*100/(contelab+contimportado+contnacional)
	if(contelab!=0){
		console.log(`El porcentaje de elaborados sobre el total es de %${porcentajeelab}`)
	}	

	if(contlimpieza!=0){
		promediopesolimp=acumpesolimp/contlimpieza
		console.log(`El peso promedio de los productos de limpieza es ${promediopesolimp}kg`)
	}
	if(contcomest!=0){
		promediopesocomest=acumpesocomest/contcomest
		console.log(`El peso promedio de los productos de comestibles es ${promediopesocomest}kg`)
	
	}
	if (contotros!=0){
		promediopesootros=acumpesootros/contotros
		console.log(`El peso promedio de los productos del tipo otros es ${promediopesootros}kg`)
	}




	
	
//colocar un contador en cada tipo de producto 
// acumular precios en cada tipo de producto
//debo buscar el máximo peso de los comestibles
//debo buscar el máximo precio entre todos los productos 
//debo buscar el mínimo precio entre los elaborados
//colocar un cuantificador a cada tipo de mercadería (adentro del bucle) y compararlos para ver cuál se pide más (afuera del bucle)
//cuantificador a cada tipo de procedencia (adentro del bucle) y calcular porcentaje de elaborado (afuera del bucle)
//calcular el promedio de peso de cada tipo con el contador y acumulador
//debo informar SOLO SI HAY 
//a) el NOMBRE del mas pesado de los comestibles
//b) el NOMBRE del  mas caro de todos los productos
//c) el NOMBRE del  mas barato de los elaborados
//d)el tipo de mercadería  que mas aparece
//e)el porcentaje de productos elaborados por sobre el total
//f) el promedio de pesos por cada tipo ingresado*/
}
