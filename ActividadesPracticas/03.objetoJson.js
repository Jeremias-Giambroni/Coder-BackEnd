/**Escribir un programa ejecutable bajo node js que realice las siguientes acciones:
 * Abra una terminal en el directorio del archivo y ejecute la instruccion: npm init -y
 * Esto creara un archivo especial de nombre package.json
 * Lea el archiivo y declare un objeto con el siguiente formato y datos: 
 * const info = {
 *  contenidoStr : {contenido del archivo leido en formato string}
 *  contenidoObj : {contenido del archivo leido en formato objeto}
 *  size : {tamaño en bytes del archivo}
 * }
 * 
 * Muestre por consola el objeto info luego de leer el archivo
 * Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta
 * de package.json
 * Incluir el manejo de errores (con throw new Error)
 * Utilizar el módulo promises de fs dentro de una función async await y utilizar
 * JSON.stringify + JSON.parse para poder hacer las transformaciones json -> objeto
 * y viceversa.
*/

const fs = require('fs');

const leerPackageJson = async () =>{
    try {
        const contenido = await fs.promises.readFile('./package.json','utf-8') //Lo leemos y lo guardamos en la variable contenido como está, está en formato string
        const contObj = JSON.parse(contenido) //Lo transformamos a formato objeto con JSON.parse
        const stats = await fs.promises.stat('./package.json')
        const info = {
            contenidoStr : contenido,
            contenidoObj : contObj,
            size : stats.size
        }
        await fs.promises.writeFile('./info.json', JSON.stringify(info), 'utf-8') //Creamos el archivo info.json y le enviamos los datos que extrajimos de package.json ordenados de la manera que deseamos.
    } catch (error) {
       console.log(error);
    }
}

leerPackageJson()
