// Nuevas funcionalidades de ECMAScript 8
//Object.entries / keys / values

const usuario = {
    name : "Andres",
    email : "andres@gmail.com",
    age : 22
}

//Entries
console.log(Object.entries(usuario)); //me trae en forma de array de esta manera ["name", "Andres"] asi con cada par

//Keys
console.log(Object.keys(usuario)); //Todas las keys en un arrar ["name", "email", "age"]

//Values
console.log(Object.values(usuario));//Igual que con las keys pero ahora me trae los valores ["Andres",  "andres@gmail.com", 22]



/*Ejemplo más práctico */
const impuestos = {
    impuesto1 : 2341,
    impuesto2 : 341,
    impuesto3 : 4611,
    impuesto4 : 5431
}


let parLlaveValor = Object.entries(impuestos) //Guardamos cada entrada en arrays
console.log(parLlaveValor);


let soloPropiedades = Object.keys(impuestos)
console.log(soloPropiedades); //obtenemos solo las propiedades del objeto sin necesidad de su valor, lo abordaremos en elementos prácticos mas adelante

let soloValores = Object.values(impuestos) 
console.log(soloValores); //Teniendo solo los valores del objeto podemos utilizarlos para hacer un total por ejemplo


let impuestosTotales = soloValores.reduce((valorInicial,valorAcumulado)=>valorAcumulado+valorInicial); 
/*
El método .reduce() en JavaScript transforma un array de números en un único valor final, ejecutando una función "callback" en cada elemento de izquierda a derecha.
Utiliza un acumulador que guarda el resultado parcial, sumando o combinando cada valor actual al total acumulado
*/

console.log(impuestosTotales); //12724


//ASYNC y AWAIT
//Lo trabajaremos en la clase 04