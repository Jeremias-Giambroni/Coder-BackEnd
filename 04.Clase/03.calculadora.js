const sumar = (valor1, valor2) => valor1 + valor2 //return implicito por arrow function
const restar = (valor1, valor2) => valor1 - valor2 //return implicito por arrow function
const multplicar = (valor1, valor2) => valor1 * valor2 //return implicito por arrow function
const dividir = (valor1, valor2) => valor1 / valor2 //return implicito por arrow function

const realizarOpreacion = (numero1,numero2,funcionCallback) =>{ //Funcion callback siempre va al final por convención
    console.log("Realizo la operación que recibo");
    let resultado = funcionCallback(numero1,numero2);
    console.log(`El resultado de la operación enviada es : ${resultado}`);
}

realizarOpreacion(4,5,multplicar) //"Realizo la operación que recibo" -  El resultado de la operación enviada es : 20
