class Persona{
    constructor(name, lastName, age,){
        this.name = name
        this.lastName = lastName
        this.age = age
    }

    static especie = "humano"; 

    saludar = () => {
        console.log(`Hola soy ${this.name}`);
    }

    getName = () => {
        console.log(`Me llamo ${this.name} ${this.lastName}`);
    } 
    
    getAge = () =>{
        console.log(`Tengo ${this.age} años`);
    }

    despedir = () => {
        console.log(`Chau, Hasta pronto!`);   
    }
}

const juan = new Persona("Pablo", "Rodriguez", 28);
const lucia = new Persona("Lucia", "Romero", 32)

/*Asi llamamos a los metodos */
lucia.getName();
juan.getName()

// Así a las variables static, accedo sin instanciar
console.log(Persona.especie);



