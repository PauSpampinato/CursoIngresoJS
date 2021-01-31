/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let a
    let b
    let c
    let suma

    a = parseInt(document.getElementById("txtIdPrecioUno").value)
    b = parseInt(document.getElementById("txtIdPrecioDos").value)
    c = parseInt(document.getElementById("txtIdPrecioTres").value)

    suma = a + b + c
    alert("La suma es $" + suma);
}
function Promedio() {
    let a
    let b
    let c
    let promedio

    a = parseInt(document.getElementById("txtIdPrecioUno").value)
    b = parseInt(document.getElementById("txtIdPrecioDos").value)
    c = parseInt(document.getElementById("txtIdPrecioTres").value)

    promedio = (a + b + c) / 3
    alert("El promedio es $" + promedio);
}
function PrecioFinal() {
    let a
    let b
    let c
    let preciofinal

    a = parseInt(document.getElementById("txtIdPrecioUno").value)
    b = parseInt(document.getElementById("txtIdPrecioDos").value)
    c = parseInt(document.getElementById("txtIdPrecioTres").value)

    preciofinal = (a + b + c) * 1.21

    alert("El Precio Final es $" + preciofinal);
}