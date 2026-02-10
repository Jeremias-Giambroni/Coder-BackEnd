/** CASO PRÁCTICO DE USO DE 'req.query'
 * Dado un arreglo de objetos tipo usuario, vamos a hacer un filtro por genero
 * 
 * La ruta raíz '/' debe devolver todos los usuarios, pero ahora colocaremos un query param con ?,
 * indicando que queremos un género especifico. En caso de enviarlo sin query,
 * debe devolver a todos los usuarios.
*/

import express from 'express';

const app = express();

const PORT = 8080;

app.use(express.urlencoded({extended : true}))

const usuarios = [
    {
        id : "1",
        nombre : "Jeremias",
        apellido : "Giambroni",
        edad : 22,
        genero : 'M'
    },
    {
        id : "2",
        nombre : "Rocio",
        apellido : "Rocca",
        edad : 24,
        genero : 'F'
    },
    {
        id : "3",
        nombre : "Leonor",
        apellido : "Rodriguez",
        edad : 63,
        genero : 'F'
    },
    {
        id : "4",
        nombre : "Martin",
        apellido : "Giambroni",
        edad : 60,
        genero : 'M'
    }
]

app.get('/' , (req, res)=>{
    res.send({usuarios})
})

app.get('/usuarios/:genero', (req, res) =>{
    const genero = req.params.genero; //Guardamos el valor del genero con req.params.genero
    if(!genero){ //Hacemos las validaciones del mismo, para corroborar que el valor sea el que precisamos
        return res.send({usuarios}); //En caso de no serlo devolvemos el array completo
    }
    if(genero.toUpperCase() !== 'M' && genero.toUpperCase() !== 'F'){
        return res.send({usuarios});
    }

    const usuariosFiltrados = usuarios.filter(user => user.genero === genero.toUpperCase());
    res.send({usuarios : usuariosFiltrados});
})

//CON QUERY
//http://localhost:8080/usuarios_query?genero=f --> Manera de filtrar con query el genero femenino

app.get('/usuarios_query', (req, res) =>{
    const genero = req.query.genero; //Guardamos el valor del genero con req.params.genero
    if(!genero){ //Hacemos las validaciones del mismo, para corroborar que el valor sea el que precisamos
        return res.send({usuarios}); //En caso de no serlo devolvemos el array completo
    }
    if(genero.toUpperCase() !== 'M' && genero.toUpperCase() !== 'F'){
        return res.send({usuarios});
    }

    const usuariosFiltrados = usuarios.filter(user => user.genero === genero.toUpperCase());
    res.send({usuarios : usuariosFiltrados});
})

app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`);
})