const mostrarLista = (lista) => {
    if (lista.length === 0) {
        return "Lista Vacia";
    }
    lista.forEach(element => {
        console.log(element);
    });
    let cantElementos = lista.length; 
    return `La cantidad de elementos en la lista es de: ${cantElementos}`
}

let lista1 = [1, 2, 24, 60,]
let lista2 = [21, 5, 822, 85, 66]
let lista3= [];

let resultado1 = mostrarLista(lista1)
console.log(resultado1);

let resultado2 = mostrarLista(lista2)
console.log(resultado2);

let resultado3 = mostrarLista(lista3)
console.log(resultado3);




