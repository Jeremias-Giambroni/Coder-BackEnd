const dividir = (dividendo, divisor) => {
    return new Promise ((resolve,reject) =>{ 
        if(divisor===0){
            reject('No se pueden hacer divisiones entre cero')

        }else{
            resolve(dividendo/divisor);
        }
    })
}

//Utilizamos async y await

const funcionAsincrona = async () => { //El async se ubica luego de el operador de equidad de la función
    try {
        const resultado = await dividir(10, 0) //Al hacerlo de esta manera podemos almacenar el resultado de la funcion en una variable, cosa que no sería posible sin async y await por el encapsulamiento excesivo.
        console.log(`El resultado de la división es : ${resultado}`);
        
    } catch (error) {
        console.log("Hubo un error"); //Como ya sabemos las promesas pueden ser rejected por lo que captamos un posible error.
        console.log(error); //Mostrará lo que hayamos puesto en el reject de la promesa.
    }
}

funcionAsincrona(); //No debemos olvidar ejecutar la funcion que contiene el uso de la promesa de manera asíncrona.