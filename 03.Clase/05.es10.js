//Strin.Trim()

const texto = "   Texto de ejemplo   ";

let procesado = ''

procesado = texto.trim(); // -> "Texto de ejemplo"

procesado = texto.trimStart(); // -> "Texto de ejemplo   "

procesado = texto.trimEnd(); // -> "   Texto de ejemplo"


//EJEMPLO PRACTICO
//Validación de mensaje vacío
let mensajes = []
let intentoDeMensaje = `            `
if (intentoDeMensaje.trim().length>0){ // SI por lo menos hay un caracter (no espacios) para enviar al usuario, entonces es un mensaje valido
    mensajes.push(intentoDeMensaje.trim())
}else{
    console.log("Mensaje vacio, para poder enviar un mensaje, por favor escriba algo");    
}


//Array.flat()

const arr = [1, [2,4, "g"], [4,5],8]; 

console.log(arr.flat());   //nivel de profundidad 1, en caso de ser asi [1, [1,[2,2]],2] quedaría [1, 1, [2,2], 2].
/*
[
  1, 2, 4, 'g',
  4, 5, 8
]
*/
