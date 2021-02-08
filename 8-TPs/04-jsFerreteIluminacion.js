/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantlamp
    let marca
    let preciodesc
    let preciolamp
    let preciofinal
    let desc

    cantlamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    preciolamp = 35

    switch (cantlamp) {
        case 6:
            desc = 0.5;
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                desc = 0.6;
            }
            else {
                desc = 0.7;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                desc = 0.75;
            }
            else {
                desc = 0.8;
            }
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                desc = 0.85;
            }
            else if (marca == "FelipeLamparas") {
                desc = 0.9;
            }
            else {
                desc = 0.95;
            }
            break;
        default:
            if (cantlamp > 6) {
                desc = 0.5;
            }
            else {
                desc = 1
            }

    }
    preciodesc = (cantlamp * preciolamp) * desc;
    if (preciodesc >= 120) {
        preciofinal = preciodesc * 1.1;
        alert(`IIBB Usted pagó $${preciodesc * 0.1}`);
    }
    else {
        preciofinal = preciodesc;
    }
    document.getElementById("txtIdprecioDescuento").value = preciofinal;

    /* if (cantlamp >= 6){
         preciodesc = (cantlamp * preciolamp)* 0.5
         document.getElementById("txtIdprecioDescuento").value = preciodesc 
     }
     else if (cantlamp == 5){
         switch (marca){
             case "ArgentinaLuz":
                 preciodesc = (5*preciolamp)*0.6;
                 document.getElementById("txtIdprecioDescuento").value = preciodesc
                 break;
             default:
                 preciodesc =(5*preciolamp)*0.7;
                 document.getElementById("txtIdprecioDescuento").value = preciodesc;
 
         }
         if (preciodesc >= 120) {
 
 
         }
     }*/


}
