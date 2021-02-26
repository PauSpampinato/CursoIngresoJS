function mostrar() {
  let precio;
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
//Si no terminas de copiar podes mirar el video de la clase del 25/02 los ultimos 20min
/* estrategia de resolución
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
y además guardo el tipo
