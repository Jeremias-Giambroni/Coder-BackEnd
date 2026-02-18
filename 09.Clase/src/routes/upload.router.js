import { Router } from 'express'
import upload from '../utils/multer.config.js'

const router = Router()

// Ruta para mostrar el formulario
router.get('/', (req, res) => {
    res.sendFile('hello.html', { root: './src/public' })
})

// Ruta para subir una sola imagen
router.post('/', upload.single('myfile'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({
                status: 'error',
                error: 'No se ha subido ningún archivo'
            })
        }

        res.status(200).send({
            status: 'success',
            message: 'Imagen subida correctamente',
            file: {
                filename: req.file.filename,
                originalname: req.file.originalname,
                size: req.file.size,
                path: `/uploads/${req.file.filename}`
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            error: error.message
        })
    }
})

// Ruta para subir múltiples imágenes (opcional)
router.post('/multiple', upload.array('images', 5), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send({
                status: 'error',
                error: 'No se han subido archivos'
            })
        }

        const filesInfo = req.files.map(file => ({
            filename: file.filename,
            originalname: file.originalname,
            size: file.size,
            path: `/uploads/${file.filename}`
        }))

        res.status(200).send({
            status: 'success',
            message: `${req.files.length} imagen(es) subida(s) correctamente`,
            files: filesInfo
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            error: error.message
        })
    }
})

export default router