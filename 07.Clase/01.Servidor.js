const http = require('http')

const server = http.createServer((req, res) =>{ //peticion y respuesta
    res.end('Mi primer Hola Mundo desde backend')
})

server.listen(8080, () =>{ //Lo encontramos en el navegador así -> localhost:8080
    console.log('Escuchando en puerto 8080');  
})

