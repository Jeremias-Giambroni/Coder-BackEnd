const fs = require('fs')

//fs SÍNCRONO 
/**
 * Usaremos la palabra Sync después de cada operación que queramos realizar
 * las principales son:
 * writeFileSync -> Para escribir contenido en un archivo. Si el archivo no existe lo crea, si existe lo sobreescribe.
 * 
 * readFileSync -> Para obtener el contenido de un archivo
 * 
 * appendFileSync -> Para añadir contenido a un archivo. ¡No se sobreescribe!
 * 
 * unlinkSync -> Es el 'delete' de los archivos. Eliminará todo el archivo, no solo el contenido
 * 
 * existsSync -> Corrobora que un archivo exista.
*/

fs.writeFileSync('./ejemplo.txt', 'Hola como estás? escrbiendo mi archivo', 'utf-8') //Dentro de parentesis ingresamos path del archivo y separado entre coma el contenido de este, además debemos agregar el formato utf-8

if (fs.existsSync('./ejemplo.txt')) { //Compruebo la existencia del archivo enviandole su path
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8'); //Guardo en una variable el contenido del archivo con la funcion readFileSync que se encarga de leerlo.
    console.log(contenido); //Chequeo su contenido
    fs.appendFileSync('./ejemplo.txt', ' Agregando Contenido!', 'utf-8');
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);
    fs.unlinkSync('./ejemplo.txt') // finalmente borramos el archivo
}
