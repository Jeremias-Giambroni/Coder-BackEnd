//Ejemplos de spread y rest operator

let objeto1 = {
    propiedad1 : 2,
    propiedad2 : "b",
    propiedad3 : true
}

let objeto2 = {
    propiedad1 : "c",
    propiedad2 : [2,3,5,6,7]
}


//SPREAD OPERATOR nos sirve para hacer una destructuración del objeto, para poder utilizar solo las propiedades que queremos

let {propiedad1, propiedad2} = objeto1 //Tomamos el objeto1 y lo "rompemos" para obtener solo las primeras dos propiedades
let objeto3 = {...objeto1, ...objeto2} //Spread operator tambien se puede utilizar para vaciar propiedades de un objeto en otro objeto nuevo.

console.log(objeto3); //resultado : { propiedad1: 'c', propiedad2: [ 2, 3, 5, 6, 7 ], propiedad3: true }
//Notamos cómo, si dos elementos comparten el mismo nombre de propiedad se superponen por lo que propiedad1 y propiedad2 del objeto uno
//Ya no existen dentro del objeto3, sino que fueron "superpuestos" por propieda1 y propiedad2 del objeto2.


//REST OPERATOR nos servirá para obtener un objeto sólo con las propiedades restantes del objeto que hayamos destructurado, por ejemplo:
let objeto4 = {
    a : 1,
    b : 2,
    c : 3
};

let {a,... rest} = objeto4; //Indicamos que queremso trabajar con la proppiedad a y guardar en una copia de objeto el resto de las propiedades
// De ese objeto, en caso de que los necesitemos mas adelante.
console.log(rest); //resultado : { b: 2, c: 3 }


