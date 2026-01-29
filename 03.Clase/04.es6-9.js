const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:3,
        sandias:2,
        huevos:6,
        jugos:1,
        panes:4
    }
];

//Realizar una lista nueva (array) que contenga todos los tipos de producto, no cantidades

const productos = []

objetos.forEach(element => { //usamos el forEach recorriendo cada objeto que hay dentro del array 'objetos' valiendo element en cada iteración cada objeto
    productos.push(...Object.keys(element)) //con .push enviamos a productos todas las keys del objeto sobre el que este iterando el for (element)
});

//Usamos el spread operator para que no envie el array sino solamente los valores, para no tener un array dentro de otro

/* resultado de productos sin el spread:
[
  [ 'manzanas', 'peras', 'carne', 'jugos', 'dulces' ],
  [ 'manzanas', 'sandias', 'huevos', 'jugos', 'panes' ]
]

resultado con el spread:
[
  'manzanas', 'peras',
  'carne',    'jugos',
  'dulces',   'manzanas',
  'sandias',  'huevos',
  'jugos',    'panes'
]
se repiten elementos usaremos un .reduce y .includes para evitarlo
*/

const productosUnicos = productos.reduce((acumulador, item) => { //acumulador -> array
    if(!acumulador.includes(item)){
        acumulador.push(item)
    }
    return acumulador;
}, []) //como se inicializa el acumulador

console.log(productosUnicos);
/*
[
  'manzanas', 'peras',
  'carne',    'jugos',
  'dulces',   'sandias',
  'huevos',   'panes'
]
Ya no se repiten
*/

/*--------------------------------------------------------------------------------------------------- */

//Obtener el total de productos vendidos por todos los objetos (object.values)

const cantProductos = []

objetos.forEach(element => {
    cantProductos.push(...Object.values(element))
});

const totalProductos = cantProductos.reduce((acc,item) => {
    acc = acc + item
    return acc
}, 0) //El 0 es el valor de como se inicializa el acumulador

console.log(totalProductos);