/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo
let resultado 

sueldo=parseFloat(document.getElementById("txtIdSueldo").value) /*el sueldo puede tener decimales
asi que conviene usar parseFloat*/


resultado = (sueldo *1.1).toFixed(0);


document.getElementById("txtIdResultado").value=resultado
    /* Machetito:
    Qué datos voy a precisar?
    De dónde los obtengo?
    Qué hago con esos datos?
    Qué hago con el producto del análisis de esos datos?

    1_ Identificar datos y reservar memoria para ellos (declarar la variable)
    2_ Conseguir el dato
    3_ Calcular el resultado
    4_ Informo el resultado

    (Esto es pseudocódigo)*/

}
