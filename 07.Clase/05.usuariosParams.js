/**
 * Dado un arreglo de objetos de tipo usuario, realizar un servidor express
 * que permita obtener dichos usuarios.
 * La ruta raiz '/' debe devolver todos los usuarios
 * La ruta /:userId debe devolver sólo al usuario con dicho id
*/

import express from 'express'

const app = express()

app.use(express.urlencoded({extended : true})) //Configuramos la url para que puedan ser extendidas y reconozcan caracteres de urls dinámicas.

const PORT = 8080

const usuarios = [
    {
        nombre : "Jeremias",
        apellido : "Giambroni",
        edad : 22,
        id : "1"
    },
    {
        nombre : "Rocio",
        apellido : "Rocca",
        edad : 24,
        id : "2"
    },
    {
        nombre : "Leonor",
        apellido : "Rodriguez",
        edad : 63,
        id : "1"
    },
]

app.get('/' , (req, res)=>{
    res.send({usuarios})
    /**Se recomienda enormemente mandar los datos en dormato objeto en lugar de
     * enviarlos con¿mo un array solo, esto permite que, si vamos a meter más info 
     * en el futuro no tengamos que cambiar el tipo de respuesta de lado del cliente
     * 
     */
})

app.get('/usuario/:id' , (req, res)=>{
    const userId = req.params.id //Obtenemos el id del usuario a trabajar
    const user = usuarios.find(usuario => usuario.id === userId)
    //Si no encuentra al usuario, debe finalizar la función devolviendo un error
    if (!user){
        return res.send({error: "Usuario no encontrado"})
    }

    //En caso de que no haya finalizado la funcion. significa que el usuario sí se encontró.
    res.send({user});
})

app.listen(PORT, () => console.log(`Puerto ${PORT} Escuchando`))