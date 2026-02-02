const dividir = (dividendo, divisor) => {
    return new Promise ((resolve,reject) =>{ //Al crear una promise, estamos pasando un callback con dos parametros, resolve y reject
        if(divisor===0){
            reject('No se pueden hacer divisiones entre cero')
            /**
             * Rechazamos la operación porque no es posible trabajar con una division entre cero, no puedo
             * cumplirle al usuario la promesa que hice sobre dividir sus números
             */
        }else{
            resolve(dividendo/divisor);
            /**
             * Si los valores son validos, entonce si puedo cumplir la promesa que le hice al usuario de
             * dividir sus numeros por lo tanto utilizaremos el valor
             */
        }
    })
}

//Utilización de promesas

dividir(5,2)
    .then(resultado =>{
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })


//Encadenamiento de promesas
new Promise(function (resolve, reject) {
setTimeout(() => resolve(1), 1000) //(*) 
})
.then(result =>{ //(**)
    console.log(result); //1
    return result * 2
})
.then(result => { //(***)
    console.log(result); //2
    return result * 2
})
.then(result =>{
    console.log(result);
    return result * 2;
})
//podría seguir hasta que cortemos el return del then

/**
 * 1)La promesa incial se resuelve en 1 segundo (*)
 * 2)Entonces se llama el controlador .then (**)
 * 3)El valor que devuelve se pasa al siguiente controlador .then (***)
 */

//SI EN ALGUNO DE LOS THEN ALGO LLEGARA A SALIR MAL, SOLO SE NEVESITA UN .CATCH PARA ATRAPARLO

