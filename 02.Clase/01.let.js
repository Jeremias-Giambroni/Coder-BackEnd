//Scope de variables
let i = 0
function foo() {
    i=1 
    let j = 2
    if (true) {
        console.log(i); //1
        console.log(j); //2
    }
}

foo();

/*Puedo acceder a la variable i dentro de la funcion ya que esta es global
j es local */

function foo() {
    let i = 0
    if (true) {
        let i = 1
        console.log(i); //1
    }
    console.log(i); //0
}

foo();
/*Pero si declaramos una variable let dentro de un bloque (if) que 
a su vez está dentro de una funcion (foo) la variable solo pertenece
a ese bloque por lo que fuera de ese bloque el valor de la variable
sigue como esta fuera*/

function foo(){
    if (true) {
        let i = 1;
    }
    console.log(i);
        //ReferenceError:
        //i is not defined
}
//no existe i fuera de su bloque donde fue declarada
foo()

