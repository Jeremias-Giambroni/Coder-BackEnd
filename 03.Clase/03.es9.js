// Nuevas funcionalidades de ECMAScript 9
//Operados REST y SPREAD

const persona1 = {
    nombre : "Pedro",
    apellido : "Lopez",
    edad : 28
};

const persona2 = {
    nombre : "Juan",
    apellido : "Romero",
    edad : 31
};

//spread destructuring (Tomar del objeto sus valores particulares)
/* El spread operator (...) en JavaScript expande elementos de un iterable (arrays, objetos, strings) en lugares donde se esperan múltiples elementos o argumentos.
Funciona "desempaquetando" colecciones para copiar, fusionar o pasar argumentos individualmente, permitiendo un código más conciso y funcional sin mutar los datos originales.  */

let { nombre, apellido } = persona2
console.log(nombre); //Juan
console.log(apellido); //Romero

//rest
/*El rest operator (...) en JavaScript agrupa un número indefinido de argumentos o elementos restantes en un solo array, permitiendo manejar funciones con parámetros variables
de forma sencilla. Se utiliza comúnmente en la definición de funciones o en la desestructuración de arrays y objetos, facilitando la manipulación del "resto" de los datos.  */

let persona3 = {...persona1}; //Generamos en persona3 una copia del objeto "persona1"

persona3.nombre = "Luis"; //Modificamos de esta manera el objeto copia sin modificar el objeto original

console.log(persona1.nombre); //Pedro
console.log(persona3.nombre); //Luis


//Obtener el resto de los parametro en una unica variable
//De esta manera copio la edad de persona 2 y luego de los tres puntos estoy guardando todos los valores del objeto que quedan en una unica variable se guardan en formato objeto
let { edad, ...nombreyapellido } = persona2

console.log(edad); //31
console.log(nombreyapellido); // { nombre: 'Juan', apellido: 'Romero' }

