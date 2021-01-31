/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    let tempf
    let tempc

    tempf = parseInt(document.getElementById("txtIdTemperatura").value)
    tempc = (tempf - 32) * 5 / 9

    alert(tempf + " grados Fahrenheit son " + tempc + " grados centígrados");



}

function CentigradosFahrenheit() {
    let tempf
    let tempc

    tempc = parseInt(document.getElementById("txtIdTemperatura").value)
    tempf = (tempc * 9 / 5) + 32

    alert(tempc + " grados Centígrados son " + tempf + " grados Fahrenheit");
}
