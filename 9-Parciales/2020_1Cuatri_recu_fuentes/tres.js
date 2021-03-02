function mostrar() {
  /*3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro ,
 pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza*/

  let tipo;
  let raza;
  let edad;
  let nombre;
  let flagperro = 0;
  let maxedadperro;
  let nombreviejoperro;
  let contperro = 0;
  let flaggato = 0;
  let maxedadgato;
  let nombreviejogato;
  let contgato = 0;
  let flagpajaro = 0;
  let maxedadpajaro;
  let nombreviejopajaro;
  let contpajaro = 0;
  let flagotros = 0;
  let maxedadotros;
  let nombreviejootros;
  let contotros = 0;
  let contsiames = 0;
  let contturco = 0;
  let contpeterbald = 0;
  let contgenerico = 0;
  let acumedadsiames=0;
  let acumedadturco=0;
  let acumedadpeterbald=0;
  let acumedadgenerico=0;
  let promedioedad;

  for (let i = 0; i < 10; i++) {
    tipo = prompt("Ingrese el tipo (perro/gato/pajaro/otros):");
    while (
      !(
        tipo == "perro" ||
        tipo == "gato" ||
        tipo == "pajaro" ||
        tipo == "otros"
      )
    ) {
      tipo = prompt("Error. Reingrese el tipo (perro/gato/pajaro/otros):");
    }
    nombre = prompt("Ingrese nombre:");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Reingrese nombre (no se aceptan solo numeros):");
    }
    switch (tipo) {
      case "perro":
        raza = prompt("Ingrese la raza del perro (pastor/toy/callejero): ");
        while (!(raza == "pastor" || raza == "toy" || raza == "callejero")) {
          raza = prompt(
            "Error. Reingrese la raza del perro (pastor/toy/callejero): "
          );
        }
        edad = prompt("Ingrese edad (1 a 20 años):");
        while (edad < 1 || edad > 20) {
          edad = prompt("Error. Reingrese edad (1 a 20 años):");
        }
        contperro++;
        if (flagperro == 0) {
          maxedadperro = edad;
          nombreviejoperro = nombre;
          flagperro = 1;
        } else if (edad > maxedadperro) {
          maxedadperro = edad;
          nombreviejoperro = nombre;
        }
        break;
      case "gato":
        raza = prompt(
          "Ingrese la raza del gato (siames/turco/peterbald/generico): "
        );
        while (
          !(
            raza == "siames" ||
            raza == "turco" ||
            raza == "peterbald" ||
            raza == "generico"
          )
        ) {
          raza = prompt(
            "Error. Reingrese la raza del gato (siames/turco/peterbald/generico): "
          );
        }
		if(raza=="siames"){
			contsiames++
			acumedadsiames+=edad
		}
		else if(raza=="turco"){
			contturco++
			acumedadturco+=edad
		}
		else if(raza=="peterbald"){
			contpeterbald++
			acumedadpeterbald+=edad
		
		}
		else{
			contgenerico++
			acumedadgenerico+=edad
		}
        edad = prompt("Ingrese edad (1 a 20 años):");
        while (edad < 1 || edad > 20) {
          edad = prompt("Error. Reingrese edad (1 a 20 años):");
        }
        contgato++;
        if (flaggato == 0) {
          maxedadgato = edad;
          nombreviejogato = nombre;
          flaggato = 1;
        } else if (edad > maxedadgato) {
          maxedadgato = edad;
          nombreviejogato = nombre;
        }
        break;
      case "pajaro":
        raza = prompt("Ingrese la raza:");
        while (!isNaN(raza)) {
          raza = prompt("Error. Reingrese la raza:");
        }
        edad = prompt("Ingrese edad (1 a 20 años):");
        while (edad < 1 || edad > 50) {
          edad = prompt("Error. Reingrese edad (1 a 20 años):");
        }
        contpajaro++;
        if (flagpajaro == 0) {
          maxedadpajaro = edad;
          nombreviejopajaro = nombre;
          flagpajaro = 1;
        } else if (edad > maxedadpajaro) {
          maxedadpajaro = edad;
          nombreviejopajaro = nombre;
        }
        break;
      case "otros":
        raza = prompt("Ingrese la raza:");
        while (!isNaN(raza)) {
          raza = prompt("Error. Reingrese la raza:");
        }
        edad = prompt("Ingrese edad (1 a 20 años):");
        while (edad < 1 || edad > 100) {
          edad = prompt("Error. Reingrese edad (1 a 20 años):");
        }
        contotros++;
        if (flagotros == 0) {
          maxedadotros = edad;
          nombreviejootros = nombre;
          flagperro = 1;
        } else if (edad > maxedadotros) {
          maxedadotros = edad;
          nombreviejootros = nombre;
        }
        break;
    }
}
  if (contperro != 0) {
    console.log(`El perro más viejo es ${nombreviejoperro}`);
  }
  if (contgato != 0) {
    console.log(`El gato más viejo es ${nombreviejogato}`);
  }
  if (contpajaro != 0) {
    console.log(`El pajaro más viejo es ${nombreviejopajaro}`);
  }
  if (contotros != 0) {
    console.log(`El animal de otra especie más viejo es ${nombreviejootros}`);
  }

  if(contsiames>contturco&&contsiames>contpeterbald&&contsiames>contgenerico){
	  promedioedad=acumedadsiames/contsiames
	  console.log(`La raza de gatos con más animales es el siames y su promedio de edad es ${promedioedad}`)
  }
  else if(contturco>=contsiames&&contturco>contpeterbald&&contturco>contgenerico){
	promedioedad=acumedadturco/contturco
	console.log(`La raza de gatos con más animales es el turco y su promedio de edad es ${promedioedad}`)
  }
  else if(contpeterbald>=contturco&&contpeterbald>=contsiames&&contpeterbald>contgenerico){
	promedioedad=acumedadpeterbald/contpeterbald
	console.log(`La raza de gatos con más animales es el peterbald y su promedio de edad es ${promedioedad}`)
  }
  else{
	promedioedad=acumedadgenerico/contgenerico
	console.log(`La raza de gatos con más animales es el generico y su promedio de edad es ${promedioedad}`)
  }


}
