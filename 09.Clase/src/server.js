import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import userRouter from './routes/users.router.js'
import productRouter from './routes/products.router.js'
import uploadRouter from './routes/upload.router.js'

// Configurar __dirname para módulos ES6
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 8080

//Middlewares       
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Servir archivos estáticos desde la carpeta public
app.use('/static', express.static(__dirname + '/public'))
// Servir las imágenes subidas
app.use('/uploads', express.static(__dirname + '/public/uploads'))

// Middleware a nivel aplicación (logger)
app.use(function(req, res, next) { 
    console.log('Time:', Date.now())
    console.log('Method:', req.method)
    console.log('URL:', req.url)
    next()
})

// Endpoints
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/upload', uploadRouter) // Nueva ruta para subir imágenes

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
