import express from 'express';

const app = express();

app.get('/bienvenida', (req, res) =>{
    res.send(`<h1 style="color: blue">Bienvenido al sitio</h1>`)
})

app.get('/usuario', (req, res) =>{
    const usuario = {
        nombre : "Jeremias",
        apellido : "Giambroni",
        edad : 22,
        email : "jeregiambro@gmail.com"
    }
    res.send({usuario}) //destructuramos
})

app.listen(8080, () =>{
    console.log('escuchando el puerto 8080');
    
})