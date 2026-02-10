import express from 'express'; //Podemos importar de esta manera por el "type":"require" que agregamos en el package.json

/**
 * Express es el módulo ya instalado, sin embargo para poder tener andando nuestra "app"
 * necesitamos inicializarlo con la siguiente línea:
 */
const app = express(); //A partir de aquí, la variable app contendra todas las funcionalidades de express

/**
 * app.get apertura un "endpoint", el cual indica al protocolo HTTP que, en la ruta /saludo
 * espera una petición de tipo GET. Si se llama a otra ruta u otro método, no lo reconocerá
 */
app.get('/saludo', (req, res) =>{ //req = request (petición) ; res = response (respuesta)
    res.send("Hola como estan?"); 
    //res.sen sirve para responder a la petición con el contenido de dentro.
})  

/**
 * app.get configura el endpoint, sin embargo, el servidor aún no se a levantado para escuchar
 * en algún puerto. Pare esto, vamos a recurrir a app.listen
 */

app.listen(8082, () =>{
    console.log("Servidor en puerto 8082");
    //El segundo argumento es un callback que muestra un console.log indicando que el servidor
    //está en el puerto 8082
})
