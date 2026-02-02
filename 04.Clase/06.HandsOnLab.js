//Calculadora psoitiva con promesas
/**
 * Se crearán un conjunto de funciones gestionadas por promesas y un
 * entorno ASÍNCRONO donde podremos ponerlas a prueba 
 *
 *Definir duncion suma: 
 *Debe devoleer una promesa que se resuelva siempre que ninguno de los dos sumandos
 *sea 0
 */

const sumar = (valor1, valor2) =>{
    return new Promise ((resolve, reject) =>{
        if (valor1 === 0 || valor2===0) {
            reject("Operación innecesaria")
        }
        if((valor1 + valor2) < 0){
            reject("La calculadora solo puede devolver valores positivos")
        }else{
            resolve(valor1+valor2)
        }
    })
} 

/**Definir función resta:
 * Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
 * en caso de que el minuendo o sustraendo sea 0 rechazar la promesa indicando
 * "operacion invalida
 * En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando 'Operación invalida'"
 */
const restar = (valor1, valor2) =>{
    return new Promise ((resolve, reject) =>{
        if (valor1 === 0 || valor2 === 0) {
            reject("Operación invalida, 0 no puede ser un valor para el minuendo o el sustraendo")
        }
        if((valor1 - valor2) < 0){
            reject("La calculadora solo puede devolver valores positivos")
        }else{
            resolve(valor1-valor2)
        }
    })
} 

const multiplicar = (valor1, valor2) =>{
    return new Promise ((resolve, reject) =>{
        if (valor1 < 0 || valor2 < 0) {
            reject("Operación invalida, los factores deben ser positivos")
        }
        if((valor1 * valor2) < 0){
            reject("La calculadora solo puede devolver valores positivos")
        }else{
            resolve(valor1 * valor2)
        }
    })
} 

const dividir = (dividendo, divisor) => {
    return new Promise ((resolve,reject) =>{ 
        if(divisor===0){
            reject('No se pueden hacer divisiones entre cero')}
        if((dividendo/divisor)<0){
            reject("Error la calculadora solo devuelve valores positivos")
        }
        else{
            resolve(dividendo/divisor);
        }
    })
}


const calculo = async(num1, num2, operacion) =>{
    try {
        const resultado = await operacion(num1,num2)
        console.log(`El resultado de la operación es : ${resultado}`);
        
    } catch (error) {
        console.log(error);
    }
}



calculo(30,20,restar)