import { Router } from "express"

const router = Router()

// configuración 

router.get('/', (req, res) =>{
    res.send('get productos')
})



export default router  