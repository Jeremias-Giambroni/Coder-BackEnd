import express from 'express'

const PORT = 8080
const app = express();
/**
 * Utilizamos los dos puntos ( : ) para indicar que queremos que sea el parámetro.
 * Esto nos permite crear una ruta dinámica que puede recibir cualquier parámetro, en lugar
 * de tratar de adivinarlo. Ahora podemos ingresar cualquier nombre desde la url, en lugar
 * de tener que registrar 10000000000 rutas con 10000000000 nombres diferentes.
 */

app.get('/unparametro/:nombre', (req, res) => {
    //:parametro ahora se encontrará dentro del objeto req.params
    console.log(req.params.nombre);
    res.send(`Bienvenido! ${req.params.nombre}`)
})

app.get('/dosparametros/:nombre/:apellido', (req, res) => {
    //:nombre y :apellido ahora se encontrarán dentro del objeto req.params
   //Podemos definir nuestro endpoint cuantos parametros necesitemos!
   res.send(`El nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})

app.listen(PORT, () => console.log(`Puerto ${PORT} Listo para recibir peticiones!`));