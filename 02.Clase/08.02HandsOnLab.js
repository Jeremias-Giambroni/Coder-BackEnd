class Contador{
    constructor(responsable){
        this.responsable = responsable
        this.conteo = 0
        Contador.globalCount++;
    }

    static globalCount = 0

    contar = () =>{
        this.conteo++;
        Contador.globalCount++;
    }

    getConteoIndividual = () =>{
        return this.conteo;
    }

    getContadorGlobal = () =>{
        return Contador.globalCount;
    }
}

const julia = new Contador("Julia"); //Julia 0 Global 1
const pedro = new Contador("Pedro"); //Pedro 0 Global 2

pedro.contar() //contador de pedro suma 1 y queda en 1, el contador global también suma 1, queda en 3

pedro.contar() //contador de pedro suma 1 y queda en 2  Global suma 1 queda en 4


console.log(`Pedro cuenta individual: ${pedro.getConteoIndividual()}`) //2

console.log(`Julia cuenta individual: ${julia.getConteoIndividual()}`) //0

console.log(`El contador global es de: ${Contador.globalCount}`) //4


