const nombre = "Juan"

nombre = "Pedro" //No se puede, TypeError
console.log(nombre);

//No podemos reasignar pero si podemos MUTAR (elementos mutables arrays, objetos, otros)

const persona = {nombre : "Juan"}

persona.nombre = "Pablo"
