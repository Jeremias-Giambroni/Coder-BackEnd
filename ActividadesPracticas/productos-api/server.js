import express from 'express'

const app = express()
const PORT = 8080

// Middleware para procesar JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Mensajes para devolver con status
const MESSAGES = {
    PRODUCT_NOT_FOUND: 'Producto no encontrado',
    MISSING_FIELDS: 'Faltan campos obligatorios',
    INVALID_PRICE: 'El precio debe ser un número positivo',
    INVALID_STOCK: 'El stock debe ser un número entero positivo',
    SUCCESS: 'Operación exitosa',
    PRODUCT_CREATED: 'Producto creado exitosamente',
    PRODUCT_UPDATED: 'Producto actualizado exitosamente',
    PRODUCT_DELETED: 'Producto eliminado exitosamente'
}
// Array para almacenar productos (en memoria)
const productos = []

// Función auxiliar para generar nuevo ID
const getNextId = () => {
    return productos.length > 0 //Si hay productos en el array
        ? Math.max(...productos.map(p => p.id)) + 1 // Encuentra el ID más alto y súmale 1, es importante tomar el máximo no el orden por que pueden ser eliminados
        : 1 //Si no hay productos, empieza en 1
}

//Funcion auxiliar para econtrar producto por ID
const findProductById = (id) => {
    return productos.find(p => p.id === Number(id))
}

app.get('/', (req , res) => {
    res.send('Bienvenido a mi API')
})

// TODO: Implementar los siguientes endpoints:

// 1. GET /api/productos - Obtener todos los productos
app.get('/api/productos', (req, res) => {
    res.status(200).send({
        status : "success",
        data : productos
    })
})

// 2. GET /api/productos/:pid - Obtener un producto por ID
app.get('/api/productos/:pid', (req, res) => {
    const { pid } = req.params
    const producto = findProductById(pid)

    if (!producto){
        return res.status(404).send({
            status : "error",
            error : MESSAGES.PRODUCT_NOT_FOUND
        })
    }

    res.status(200).send({
        status : "success",
        data : producto
    })
})

// 3. POST /api/productos - Crear un nuevo producto

app.post('/api/productos' , (req, res) => {

    const {nombre, precio, categoria, stock} = req.body

    // Validación de campos obligatorios

    if (!nombre || !precio || !categoria || stock === undefined) {
        return res.status(400).send({
            status : "error",
            error : MESSAGES.MISSING_FIELDS
        })
    }

    // Validación de precio

    if (isNaN(precio) || Number(precio) <= 0) {
        return res.status(400).send({
            status : "error",
            error : MESSAGES.INVALID_PRICE
        })
    }
        
    // Validación de stock

    if (isNaN(stock) || Number(stock) < 0 ||  !Number.isInteger(Number(stock))) { //Validacion extra para que no se un numero que contenga decimales
        return res.status(400).send({
            status : "error",
            error : MESSAGES.INVALID_STOCK
        })
    }

    // Crear nuevo producto

    const nuevoProducto = {
        id : getNextId(),
        nombre,
        precio : Number(precio),
        categoria,
        stock : Number(stock)
    }

    productos.push(nuevoProducto)

    res.status(201).send({
        status : "success",
        message : MESSAGES.PRODUCT_CREATED,
        data : nuevoProducto
    })
})

// 4. PUT /api/productos/:pid - Actualizar un producto
app.put('/api/productos/:pid', (req, res) => {
    const { pid } = req.params
    const { nombre, precio, categoria, stock } = req.body
    
    const productoIndex = productos.findIndex(p => p.id === Number(pid))
    
    if (productoIndex === -1) {
        return res.status(404).send({
            status: 'error',
            error: MESSAGES.PRODUCT_NOT_FOUND
        })
    }
    
    // Validaciones opcionales (solo si se envían los campos)
    if (precio !== undefined && (isNaN(precio) || Number(precio) <= 0)) {
        return res.status(400).send({
            status: 'error',
            error: MESSAGES.INVALID_PRICE
        })
    }
    
    if (stock !== undefined && (isNaN(stock) || Number(stock) < 0 || !Number.isInteger(Number(stock)))) {
        return res.status(400).send({
            status: 'error',
            error: MESSAGES.INVALID_STOCK
        })
    }
    
    // Actualizar solo los campos enviados
    const productoActualizado = {
        ...productos[productoIndex],
        ...(nombre && { nombre }),
        ...(precio && { precio: Number(precio) }),
        ...(categoria && { categoria }),
        ...(stock !== undefined && { stock: Number(stock) })
    }
    
    productos[productoIndex] = productoActualizado
    
    res.status(200).send({
        status: 'success',
        message: MESSAGES.PRODUCT_UPDATED,
        data: productoActualizado
    })
})


// 5. DELETE /api/productos/:pid - Eliminar un producto

app.delete('/api/productos/:pid' , (req, res) => {
    const { pid } = req.params

    const productoIndex = productos.findIndex(p => p.id === Number(pid))

    if (productoIndex === -1) {
        return res.status(404).send({
            status: 'error',
            error: MESSAGES.PRODUCT_NOT_FOUND
        })
    }

    const productoEliminado = productos.splice(productoIndex, 1)[0] //Añadir [0] al final sirve para extraer y obtener específicamente el primer elemento eliminado.
    
    res.status(200).send({
        status: 'success',
        message: MESSAGES.PRODUCT_DELETED,
        data: productoEliminado
    })
})

// DESAFÍOS EXTRA (Opcional):

// 6. GET /api/productos/categoria/:categoria - Filtrar por categoría


// 7. GET /api/productos?precioMin=X&precioMax=Y - Filtrar por rango de precio


// 8. PATCH /api/productos/:pid/stock - Actualizar solo el stock


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    console.log(`📝 Prueba tus endpoints con Postman!`)
})
