function mostrar() {
  let tipo;
  let cantidad;
  let precio;
  let importebruto = 0;
  let importedesc;
  let acumbolsaarena = 0;
  let acumbolsacal = 0;
  let acumbolsacemento = 0;
  let flagprecioarena = 0;
  let maxprecioarena;
  let flagpreciocal = 0;
  let maxpreciocal;
  let flagpreciocemento = 0;
  let maxpreciocemento;
  let totalbolsas;

  do {
    tipo = prompt("Ingrese el tipo (arena/cal/cemento): ");
    while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento")) {
      tipo = prompt(
        "El tipo ingresado no es válido. Reingrese el tipo (arena/cal/cemento): "
      );
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while (isNaN(cantidad)) {
      cantidad = parseInt(
        prompt("La cantidad no es válida. Reingrese la cantidad de bolsas: ")
      );
    }
    precio = prompt("Ingrese el precio:");
    while (precio <= 0) {
      precio = prompt("El precio no es válido. Reingrese el precio:");
    }

    switch (tipo) {
      case "arena":
        acumbolsaarena += cantidad;
        if (flagprecioarena == 0) {
          maxprecioarena = precio;
          flagprecioarena = 1;
        } else if (precio > maxprecioarena) {
          maxprecioarena = precio;
        }
        break;
      case "cal":
        acumbolsacal += cantidad;
        if (flagpreciocal == 0) {
          maxpreciocal = precio;
          flagpreciocal = 1;
        } else if (precio > maxpreciocal) {
          maxpreciocal = precio;
        }
        break;
      case "cemento":
        acumbolsacemento += cantidad;
        if (flagpreciocemento == 0) {
          maxpreciocemento = precio;
          flagpreciocemento = 1;
        } else if (precio > maxpreciocemento) {
          maxpreciocemento = precio;
        }
    }
    importebruto += precio * cantidad;

    seguir = prompt("Desea ingresar otro producto?: ");
  } while (seguir == "s");

  console.log(`El importe bruto es $${importebruto}`);

  totalbolsas = acumbolsacemento + acumbolsacal + acumbolsaarena;

  if (totalbolsas > 10 && totalbolsas <= 30) {
    importedesc = importebruto * 0.85;
    console.log(`El importe con descuento es $${importedesc}`);
  } else if (totalbolsas > 30) {
    importedesc = importebruto * 0.75;

    console.log(`El importe con descuento es $${importedesc}`);
  }

  if (acumbolsaarena > acumbolsacal && acumbolsaarena > acumbolsacemento) {
    console.log(`El tipo con mayor cantidad de bolsas es arena`);
  } else if (acumbolsacal>=acumbolsaarena&&acumbolsacal > acumbolsacemento) {
    console.log(`El tipo con mayor cantidad de bolsas es cal`);
  } else {
    console.log(`El tipo con mayor cantidad de bolsas es cemento`);
  }
  if (maxprecioarena > maxpreciocal && maxprecioarena > maxpreciocemento) {
    console.log(`El tipo más caro es arena`);
  } else if (maxpreciocal>=maxprecioarena&&maxpreciocal > maxpreciocemento) {
    console.log(`El tipo más caro es cal`);
  } else {
    console.log(`El tipo más caro es cemento`);
  }
}
/*let precio;
  let cantidad;
  let tipo;
  let seguir;
  let acumC = 0;
  let acumCal = 0;
  let acumA = 0;
  let tipoMax;
  let descuento;
  let neto;
  let maxPrecio;
  let tipoCaro;
  let flag = 1;





}
Si no terminas de copiar podes mirar el video de la clase del 25/02 los ultimos 20min
 estrategia de resolución
1. declaración de variables (tipo, cantidad, precio,
  importe a pagar bruto, importe con descuento, acumulador por tipo)
  2. bucle del tipo mientras el usuario quiera
  aca va el codigo que se ejecuta en cada iteración
  3. pido el tipo
  3.1 valido el tipo
  4. pido cantidad
  4.1 valido cantidad
  5. pido precio
  5.1 valido precio
  6. acumulo cantidad de bolsas
  7.calculo importe (precio*cant de bolsas) y lo acumulo
genero un bloque por cada tipo (arena, cal, cemento) y acumulo cantidades
genero un bloque al que entro en la primer iteración y otro donde entro en las restantes
en la primer iteración guardo como mayor precio el precio de este producto
y además guardo el tipo*/
