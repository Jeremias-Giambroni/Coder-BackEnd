import { Router } from 'express' //Funcion interna de express que sirve para modularizar el código especificando las rutas

const router = Router()

//middleware a nivel endpoint
function auth(req, res, next) {
    req.user={
        name : 'fede',
        role : 'admin' //Si es admin nos muestra el data:users sino, no, protegemos la ruta.
    }
    if (req.user.role !== 'admin') {
        return res.send('No puede avanzar a partir de aquí')
    }
    next()
}

const users = []

router.get('/' , auth, (req, res) => {  //Utilizamos aquí el middleware para antes de llegar al endpoint generar una validación
    res.send({data : users})    
}) 

//post
// Request -> Objeto
router.post('/' , (peticion , respuesta) => {
    const { body }  = peticion //destructuring del formulario enviado del lado del cliente que viaja en el body de la petición
    if(!body.email || !body.password){
        return respuesta.status(400).send({status : 'error', error : 'Faltan datos' }) //Validación con respuesta de status (error 400)
    }
    users.push({id: users.length + 1, ...body}) //Lo guardamos en el arreglo users, agregandole un id incrementador para manejar cada uno con el mismo
    respuesta.status(200).send({data : users}) //200    status OK
}) 

//put
router.put('/' , (req, res) => {
    res.send('Put Hola mundo')
}) 

//delete
router.delete('/:uid' , (req, res) => { //pasamos parametro por ruta 
    const { uid } = req.params
    const nuevaLista = users.filter(user => user.id != Number(uid))
    res.send(nuevaLista)
})


export default router