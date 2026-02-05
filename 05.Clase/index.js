const { DateTime} = require('luxon');

//Calculadora de edad
/**
 * Realizar un programa que utilice la dependencia luxon
 * Debe contar con una variable que almacene la fecha actual
 * Debe contar con una variable que almacene sólo la fecha de tu nacimiento
 * Validar con un if que la variable contenga una fecha válida (isValid)
 * Finalmente mostra por consola cuantos días han pasado desde que naciste hasta el día de hoy
 */
const fechaHoy = DateTime.now()

const fechaNac = DateTime.fromISO('2003-07-07')

if (fechaHoy.isValid && fechaNac.isValid) {
    const days = fechaHoy.diff(fechaNac).as('days');
    const diasRedondeado = Math.floor(days)
    console.log(`Han pasado ${diasRedondeado} días desde que nací`);
}
else{
    console.log('Fecha inválida');
}



