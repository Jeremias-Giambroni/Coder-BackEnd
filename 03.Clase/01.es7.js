// Nuevas funcionalidades de ECMAScript 7

//exponencial **
//Ejemplo 1
let valor = 2**3
let valor2 = 3**4

console.log(`El resultado de 2 a la 3 es ${valor}`);
console.log(`El resultado de 3 a la 4 es ${valor2}`);

//Ejemplo2
let valoresBase = [1,2,3,4,5,6]
let nuevosValores = valoresBase.map((numero,indice)=>numero**indice)
console.log(nuevosValores); // [1, 2, 9, 64, 625, 7776]

/* 
El código mostrado arriba toma un arreglo de valores base y, con ayuda del operador map
utiliza el operador exponencial para elevar el valor base por su índice
(1**0, 2**1, 3**2, 4**3, 5**4, 6**5)
*/ 



//Array.includes (devuelve bool)
//Ejemplo 1

const frutas = ["Pera", "Sandia", "Durazno"]
console.log(`En el array está la pera? : ${frutas.includes("Pera")}`); //La sintaxis debe ser la misma, devuelve true
console.log(`En el array está la pera? : ${frutas.includes("Limon")}`); // False

//Ejemplo2
let nombres = ["Juan", "Camilo", "Maria", "Ana", "Humberto"];
if (nombres.includes("Camilo")) {
    console.log("Camillo si aparece en el Array");
} else{
    console.log("Nombre no encontrado en la base de datos");
    
}

