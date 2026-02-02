//Ejemplo de callback utilizando Map

let valoresOriginales = [1,2,3,5,8,6]

let nuevosValores = valoresOriginales.map( x => x + 1 ) //dentro de los parentesis tenemos el callback (funcion enviada como parametro)

console.log(nuevosValores); //Obtendremos un nuevo array con cada valor que guardaba el antiguo pero todos sumados por 1.


//Otro ejemplo con la funcion hecha por fuera pero igualmente enviada en parametro
const funcionCallback = (valor) => { //evaluara si el valor del arreglo es un número par
    if(valor%2 === 0){
        return valor
    }else{
        return "no es par"
    }
}

let nuevosValoresPares = valoresOriginales.map(funcionCallback)


console.log(nuevosValoresPares);

