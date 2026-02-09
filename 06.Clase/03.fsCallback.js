const fs = require('fs')

fs.writeFile('./ejemploCallback.txt', 'Hola desde callback', 'utf-8', (error) =>{
    if (error) return console.log('No se pudo escribir el archivo')
    fs.readFile('./ejemploCallback.txt', 'utf-8', (error, resultado)=>{
        if(error) return console.log('no se puede leer el archivo');
        console.log(resultado);
        fs.appendFile('./ejemploCallback.txt', ' Más contenido', 'utf-8', (error) =>{
            if(error) return console.log("No se pudo actualizar el archivo");
            fs.readFile('./ejemploCallback.txt', 'utf-8', (error, contenido) =>{
                if (error) return console.log('No se pudo leer el archivo');
                console.log(contenido);
            })
        })
    })
})

//Se forma un Callback Hell (Mala Práctica)
