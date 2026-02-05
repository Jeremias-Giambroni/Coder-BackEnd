/**Proyecto de node
 * 
 * Crear un proyecto de node que genere 10000 números aleatorios en un rango de
 * 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.
 * 
 * Mediante el uso de promesas, crear un objeto cuyas claves sean los nuúmeros salidos
 * y el valor asociado a cada clave será la cantidad de veces que salió dicho número 
 * Representar por consola los resultados
*/ 

const generarNumeroAleatorio = (cantidad) =>{ //funcion anonima
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
        //Debido a que math.random no llega al numero exacto, al multiplicarlo por 20 obtenemos 19.999... con math.floor redondeamos hacia 19 y por eso luego sumamos uno,
        //asi obtenemos guardar el número aleatorio del 1 al 20.
        numeros.push(numeroAleatorio);
    }
    return numeros
}

function contarFrecuenciaNumeros(numeros) { //Función declarada
    return new Promise((resolve, reject)=>{
        const frecuencia = {};
        for (const numero of numeros) {
            if (frecuencia[numero]) { //Si el número ya salió sumale 1 para enumerar las repeticiones
                frecuencia[numero]++
            }
            else{
                frecuencia[numero] = 1 //Si aun no había salido asignale el valor de 1
            }
        }
        resolve(frecuencia);
        reject('Error, no se pudo enmuerar las repeticiones')
    })
}

const numeros = generarNumeroAleatorio(10000) //Enviamos 10000 la cual será la cantidad de números entre el 1 y el 20 que voy a obtener
contarFrecuenciaNumeros(numeros) //Contamos cuantas veces se repitió cada número guardandolo en un objeto cuyas claves seran los 20 números y su valor las repeticiones de los mismos.
    .then(resultado =>{
        console.log(resultado); //Mostramos el objeto con los numeros y la repeticion de los mismos
    })
    .catch(error =>{
        console.log(error);
    }) 
