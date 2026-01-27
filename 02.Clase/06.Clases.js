/*Comenzamos utilizando la palabra reservada "class" */ 
class nombreDeMiClase{
    /*Una clase cuenta con un método(funcion) constructor, éste se ejecutará CADA VEZ QUE INSTANCIE UN OBJETO */
    constructor(parametrosDeCreacion){
        console.log("nuevo objeto creado");
        this.variableInterna=2;
        /*Cada instancia de la clase contará con variables internas, para poder declararlas
        y utilizarlas necesitamos colocar un "this." antes de la variable */ 
    } 


    static variableEstatica = 4
    /*La palabra "static" es una variable que puede utilizarse SIN NECESITAR UNA INSTANCIA
    además, todas sus instancias pueden acceder a ella de igual manera. SI ALGUNA INSTANCIA CAMBIA
    LA VARIABLE ESTÁTICA, todas las instancias se enterarán */ 

    metodo1(){
        /*Los metodos son funciones que sólo puede utilizar una instancia de la clase*/
        console.log("¡Soy un método de la clase!");
    }

    metodo2 = () => {
        console.log(`Soy una funcion flecha, puedo incrustar variables: ${this.variableInterna},
        todo dentro de una clase. ¡Una locura!`);
    }
}

/*
Una vez que terminé de definir mi clase, es hora de instanciar

Usaremos el operador "new" el cuál crea una instancia de la clase.
*/
let instancia = new nombreDeMiClase(); // Se ejecutará el constructor diciendo "nuevo objeto creado" (constructor)

/*Nota cómo ahora la instancia cuenta con las variables y métodos definidos en la clase previamente */
console.log(instancia.variableInterna);
instancia.metodo1()
instancia.metodo2()

/*Para usar la variable estática, no es necesaria la instancia, simplemente lo llamamos desde la clase*/
nombreDeMiClase.variableEstatica; //4

/*La magia está en que, como la variable es un molde se pueden crear multiples instancias de ésta */

let instancia_2 = new nombreDeMiClase(); // Se ejecutará el constructor diciendo "nuevo objeto creado" (constructor)
let instancia_3 = new nombreDeMiClase(); // Se ejecutará el constructor diciendo "nuevo objeto creado" (constructor)

//Cada instancia será diferente de las otras en cuanto a sus variables y métodos (excepto los static)
