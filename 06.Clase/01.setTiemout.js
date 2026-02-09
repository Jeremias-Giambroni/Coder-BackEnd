//Ejemplo de operación síncrona
console.log('Inicando tarea');
console.log('Realizando operación');
console.log('Continuando operación');
console.log('Tarea finalizada');

//Hasta aquí todo en orden, una va detras de otra.
//¿Qué pasa con una operación asíncrona?

const temporizador = (callback) =>{ 
    setTimeout(()=>{
        callback();
    },2000) //Cuando pase este tiempo se ejecutara esta tarea una unica vez
}

let operación = () => console.log('Realizando operación');

console.log('Iniciando tarea');
temporizador(operación) //Metemos la 'operacion' al temporizador
console.log('Tarea finalizada');

/**
 * Orden de salida: 
 * 
 * Iniciando tarea
 * Tarea finalizada
 * Realizando operación
 * 
 * 
 * La tarea 'operación' tuvo que esperar 2000 milisegundos (2 seg)
 * para poder ejecutarse, pero al ser asíncrono el programa pudo continuar
 * y pudo finalizar sin esperar dicha operación
 */

setInterval(()=>{
    console.log("Ejecutando intervalo");
}, 2500) //Cada 2,5 segundos se ejecutara esta función sin parar, podríamos frenar el bucle introduciondolo en una condición 