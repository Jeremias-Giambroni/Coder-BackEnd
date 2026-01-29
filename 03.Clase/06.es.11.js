//Nullish

let vari; //

let valor1 = vari?? "Vino nula" //es un operador trusy falsy, en caso de que variable tenga un valor lo muestra sino muestra lo que haya como false (vino nula)

let valor2 = vari || "Vino nula"

// console.log(`Valor 1 es igual a: ${valor1}`);
// console.log(`Valor 2 es igual a: ${valor2}`);


//Variables prrivadas dentro de las clases

class Persona{
    #mayorEdad = 18  //variable privada, inaccesible fuera de las clases

    constructor(name, age){
        this.name = name
        this.age = age
    }

    obtenerNombre(){
        return this.name;
    }
    #metodoPrivado(){
        console.log("Uso del metodo privado");
    }
    usoMetodoPrivado(){
        this.#metodoPrivado()  //unica manera de usar el metodo privado, a traves de otro metodo
    }
}

