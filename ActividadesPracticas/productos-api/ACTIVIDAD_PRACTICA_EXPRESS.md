# 🚀 Actividad Práctica: API REST de Gestión de Productos

## 📋 Objetivo
Crear una API REST completa para gestionar un inventario de productos usando Express.js, aplicando todo lo aprendido en clase.

---

## 🎯 Parte 1: Configuración Inicial (10 min)

### Paso 1: Crear el proyecto
```bash
mkdir productos-api
cd productos-api
npm init -y
npm install express
```

### Paso 2: Configurar package.json
Asegúrate de tener:
```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  }
}
```

---

## 🛠️ Parte 2: Construcción de la API (40 min)

### Requisitos del Sistema

Debes crear una API para gestionar productos con las siguientes características:

**Estructura de un Producto:**
```javascript
{
  id: 1,
  nombre: "Laptop",
  precio: 1500,
  categoria: "Electrónica",
  stock: 10
}
```

### Endpoints a Implementar:

#### 1. **GET /api/productos**
- Obtener todos los productos
- **Respuesta esperada:** `{ status: 'success', data: [...] }`

#### 2. **GET /api/productos/:pid**
- Obtener un producto específico por ID
- **Validación:** Si no existe, retornar error 404
- **Respuesta de error:** `{ status: 'error', error: 'Producto no encontrado' }`

#### 3. **POST /api/productos**
- Crear un nuevo producto
- **Validaciones requeridas:**
  - nombre (obligatorio)
  - precio (obligatorio, debe ser número positivo)
  - categoria (obligatorio)
  - stock (obligatorio, debe ser número entero positivo)
- **Respuesta error:** Status 400 con mensaje descriptivo
- **Respuesta éxito:** Status 201 con el producto creado

#### 4. **PUT /api/productos/:pid**
- Actualizar un producto existente
- **Validaciones:**
  - El producto debe existir
  - No se puede cambiar el ID
  - Validar tipos de datos si se envían
- **Respuesta:** Status 200 con producto actualizado

#### 5. **DELETE /api/productos/:pid**
- Eliminar un producto por ID
- **Validación:** Verificar que existe antes de eliminar
- **Respuesta:** Status 200 con mensaje de confirmación

---

## 🎓 Parte 3: Funcionalidades Extra (Desafío)

### Nivel Intermedio:

#### 6. **GET /api/productos/categoria/:categoria**
- Filtrar productos por categoría
- Ejemplo: `/api/productos/categoria/Electrónica`

#### 7. **GET /api/productos?precio=min-max**
- Filtrar productos por rango de precio usando query params
- Ejemplo: `/api/productos?precioMin=100&precioMax=500`

#### 8. **PATCH /api/productos/:pid/stock**
- Actualizar solo el stock de un producto
- Body: `{ stock: 25 }`

### Nivel Avanzado:

#### 9. **Middleware de validación**
- Crear un middleware que valide que el precio no sea negativo
- Aplicarlo a POST y PUT

#### 10. **Sistema de búsqueda**
- GET `/api/productos/buscar?nombre=laptop`
- Buscar productos que contengan el término en su nombre (case insensitive)

---

## 📝 Checklist de Validaciones

Asegúrate de implementar:

- [ ] Validación de campos obligatorios
- [ ] Validación de tipos de datos (números, strings)
- [ ] Validación de valores positivos para precio y stock
- [ ] Respuestas con códigos de estado HTTP correctos (200, 201, 400, 404)
- [ ] Mensajes de error descriptivos
- [ ] IDs autoincrementales
- [ ] No permitir IDs duplicados

---

## 🧪 Pruebas con Postman

### Colección de Pruebas Sugeridas:

**1. Crear productos:**
```json
POST /api/productos
{
  "nombre": "Mouse Gamer",
  "precio": 45.99,
  "categoria": "Periféricos",
  "stock": 50
}
```

**2. Error de validación:**
```json
POST /api/productos
{
  "nombre": "Teclado",
  "precio": -20
}
// Debe retornar error 400
```

**3. Actualizar producto:**
```json
PUT /api/productos/1
{
  "precio": 49.99,
  "stock": 45
}
```

**4. Eliminar producto:**
```
DELETE /api/productos/1
```

**5. Obtener por categoría:**
```
GET /api/productos/categoria/Periféricos
```

---

## 💡 Tips y Buenas Prácticas

1. **Usa constantes para mensajes:**
```javascript
const MESSAGES = {
  PRODUCT_NOT_FOUND: 'Producto no encontrado',
  MISSING_FIELDS: 'Faltan campos obligatorios',
  INVALID_PRICE: 'El precio debe ser un número positivo'
}
```

2. **Función helper para buscar por ID:**
```javascript
const findProductById = (id) => {
  return productos.find(p => p.id === Number(id))
}
```

3. **Validación de números:**
```javascript
if (isNaN(precio) || precio <= 0) {
  return res.status(400).send({ 
    status: 'error', 
    error: 'Precio inválido' 
  })
}
```

4. **Estructura consistente de respuestas:**
   - Éxito: `{ status: 'success', data: ... }`
   - Error: `{ status: 'error', error: ... }`

---

## 🏆 Criterios de Evaluación Personal

Al terminar, verifica:

- ✅ Todos los endpoints funcionan correctamente
- ✅ Las validaciones previenen datos incorrectos
- ✅ Los códigos de estado HTTP son apropiados
- ✅ El código está organizado y es legible
- ✅ No hay código repetido (usa funciones auxiliares)
- ✅ Los mensajes de error son claros y útiles

---

## 📚 Recursos de Consulta

- [Express.js Docs](https://expressjs.com/)
- [HTTP Status Codes](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- [REST API Best Practices](https://restfulapi.net/)

---

## 🎯 Desafío Final (Opcional)

Si terminas todo, intenta:

1. **Persistencia básica:** Guardar los productos en un archivo JSON
2. **Middleware de logging:** Registrar cada petición en consola
3. **Paginación:** Implementar `?page=1&limit=10` para listar productos
4. **Ordenamiento:** Permitir ordenar por precio o nombre

---

## 🤔 ¿Dudas?

Recuerda:
- Usa `console.log()` para debuggear
- Prueba cada endpoint después de crearlo
- Lee los errores con atención
- La práctica hace al maestro 💪

**¡Buena suerte y a codear! 🚀**
