/**
 * Realizar un programa que cree un archivo en el cual escriba la fecha y hora actual.
 * Posteriormente leer el archivo y mostrar el contenido por consola.
 * Utilizar el módulo fs y sus operaciones de tipo callback
 */

const { DateTime} = require('luxon');

const fs = require('fs');

const fechaYHora = DateTime.local()
const fechaYHoraFormateada = fechaYHora.toFormat('dd/MM/yyyy HH:mm:ss')

fs.writeFile('./Fecha_Hora_Actual.txt', `La fecha y la hora actual es ${fechaYHoraFormateada}`, 'utf-8', (error)=>{
    if (error) {
        return console.log('No se pudo crear el archivo con la fecha y la hora actual');
    };
    fs.readFile('./Fecha_Hora_Actual.txt','utf-8', (error, resultado)=>{
        if (error) {
            console.log("No se pudo leer el archivo");
        }
        console.log(resultado);
    })
    
})