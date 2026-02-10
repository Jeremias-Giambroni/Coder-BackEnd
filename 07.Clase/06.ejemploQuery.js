import express from 'express'

const app = express()

const PORT = 8080

app.use(express.urlencoded({extended : true}))

app.get('/queries', (req, res) => {
    const queries = req.query;
    res.send(queries);
})
//http://localhost:8080/queries?nombre=Jeremias&apellido=Giambroni
//De esta manera yo muestro en el servidor en formato objeto el nombre : jeremias y el apellido : giambroni, iniciando con un signo de pregunta y luego con un & para otro clave valor.

app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`);
})

//A diferencia de params, utilizamos esto para filtrar por categorias por "clases(query)"