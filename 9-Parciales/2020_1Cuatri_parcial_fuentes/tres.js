function mostrar() {
  let nombre;
  let edad;
  let sexo;
  let estado;
  let temperatura;
  let seguir;
  let flagtemp=0;
  let tempmax;
  let nombretempmax;
  let conthombressolteros=0;
  let acumedadhombressolteros=0;
  let promediohombresoltero
  let conthombresviudos=0;
  let contviudosmayores=0;
  let cont3raedad=0;
  let cantHsolterosviudos;


  do {
    nombre = prompt("Ingrese el nombre: ");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Reingrese el nombre: ");
    }
    edad = parseInt(prompt("Ingrese la edad:"));
    while (isNaN(edad)) {
      edad = parseInt(prompt("Error. Reingrese la edad:"));
    }
    sexo = prompt("Ingrese el sexo(f/m):");
    while (!(sexo == "f" || sexo == "m")) {
      sexo = prompt("Error. Reingrese el sexo(f/m):");
    }
    estado = prompt("Ingrese el estado civil (soltero/casado/viudo):");
    while (!(estado == "soltero" || estado == "casado" || estado == "viudo")) {
      estado = prompt(
        "Error. Reingrese el estado civil (soltero/casado/viudo):"
      );
    }
    temperatura = parseInt(prompt("Ingrese la temperatura:"));
    while (isNaN(temperatura)) {
      temperatura = parseInt(prompt("Error. Reingrese la temperatura:"));
    }
	if(flagtemp==0){
		tempmax=temperatura
		nombretempmax=nombre
		flagtemp=1
	}
	else if(temperatura>tempmax){
		tempmax=temperatura
		nombretempmax=nombre
	}

	if (estado=="soltero"){
		if (sexo=="m"){
			conthombressolteros++
			acumedadhombressolteros+=edad
		}
									  
	}
	else if(estado=="viudo"){
		if(sexo=='m'){
		conthombresviudos++
		}
		if(edad>=18){
			contviudosmayores++
		}

  
	}
	if(edad>60&&temperatura>38){
		cont3raedad++
	}
    seguir = prompt("Desea ingresar otro cliente?:");
  } while (seguir == "s");

  
  promediohombresoltero=acumedadhombressolteros/conthombressolteros
  cantHsolterosviudos=conthombressolteros+conthombresviudos

  console.log(`a. El nombre de la persona con más temperatura es ${nombretempmax}`);
  console.log(`b. Hay ${contviudosmayores} mayores de edad viudos`);
  console.log(`c. La cantidad de hombres que hay solteros o viudos es de ${cantHsolterosviudos}`)
  console.log(`d. Hay ${cont3raedad} personas de la tercera edad con más de 38 de temperatura`);
  console.log(`e. El promedio de edad entre los hombres solteros es de ${promediohombresoltero} años`);

}
