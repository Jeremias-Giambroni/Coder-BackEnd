//Descomponemos MAP

function miFuncionMap(arreglo, funcionCallback) { 
    //La funcioncallBack es la función que recibe como parametro
    let nuevoArreglo = []
    for (let i = 0; i < arreglo.length; i++) { //Itero sobre cada uno hasta el ultimo, de los valores del array que le envie por parametro
        const elemento = arreglo[i]; //Guardo el valor del array en el que se encuentre el bucle en una constante elemento que utilizo despues

        let nuevoValor = funcionCallback(elemento); //asigno a una variable el valor que guarde del arreglo pero pasado por una funcion que lo modificará
        nuevoArreglo.push(nuevoValor) //mando el valor modificado a mi array vacio, que se ira llenando por cada iteración.
        
    }
    return nuevoArreglo
}

//let valoresOriginales = [1,2,5,6,4] //Arreglo que mandaré como parametro a la funcion map

//let nuevosValores = miFuncionMap(valoresOriginales, x => x * 2) //envio el arreglo y lo función que va a ser el modificador de cada uno de los valores del arreglo

//Guardo en el array modificado por la funcionCallback en "nuevosValores"

//console.log(nuevosValores);
 
//Podría guardarme asi mil funciones para usar en mi array como yo quisiese, ya sea modificando, borrando, agregando, filtrando, encontrando, etc los valores del array.

let valoresOriginales = [1,2,5,6,4]

Array.prototype.miMap = function (funcionCallback) { //Array.protype accede a todos los arrays cualquier metodo que agregue estara disponible para cualquier array que cree, el cual "ocuparia su lugar"
    let nuevoArreglo = []
    for (let i = 0; i < this.length; i++) { //Aqui modificamos arreglo por this
        const elemento = this[i]; 
        let nuevoValor = funcionCallback(elemento); 
        nuevoArreglo.push(nuevoValor)  
    }
    return nuevoArreglo
}


let nuevoArreglo = valoresOriginales.miMap(x => x * 5)
console.log(nuevoArreglo);
