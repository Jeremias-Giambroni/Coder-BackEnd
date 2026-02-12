import express from 'express'

const app = express()

const PORT = 8080

//para procesar los JSON del cliente
app.use(express.json())
app.use(express.urlencoded({extended : true}))

/**Ejemplos de rutas (Entidades)
 * users - crud
 * products
 * session
 * cart
 * messages
 * tickets
*/

//Definiendo endpoints con distintos metodos de petición

//get http://localhost:8080/

const users = []

app.get('/api/users/' , (req, res) => {
    res.send({data : users})    
}) 

//post
// Request -> Objeto
app.post('/api/users/' , (peticion , respuesta) => {
    const { body }  = peticion //destructuring del formulario enviado del lado del cliente que viaja en el body de la petición
    if(!body.email || !body.password){
        return respuesta.status(400).send({status : 'error', error : 'Faltan datos' }) //Validación con respuesta de status (error 400)
    }
    users.push({id: users.length + 1, ...body}) //Lo guardamos en el arreglo users, agregandole un id incrementador para manejar cada uno con el mismo
    respuesta.status(200).send({data : users}) //200    status OK
}) 

//put
app.put('/api/users/' , (req, res) => {
    res.send('Put Hola mundo')
}) 

//delete
app.delete('/api/users/:uid' , (req, res) => { //pasamos parametro por ruta 
    const { uid } = req.params
    const nuevaLista = users.filter(user => user.id != Number(uid))
    res.send(nuevaLista)
}) 

//No podemos repetir método para un mismo endpoint

// app.get('/api/productos') para usar otra ruta con otro endpoint

app.listen(PORT, () =>{
    console.log(`Escuchando en el puerto ${PORT}`);
})
