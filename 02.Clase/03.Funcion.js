//Sintaxis de función con parametros
function suma (val1, val2){
    let suma = val1 + val2;
    return suma;
}

//Arrow Function 
const suma = (val1, val2) =>{
    let suma = val1 + val2;
    return suma
}

//arrow function con return implicito (no podemos debuguear por ser en una única línea)
//const suma = (val1, val2) => val1 + val2;

let result = suma(1,2);
console.log(res); //3

//return implicito y parametro sin parentesis por ser único
const restoUno = val => val - 1