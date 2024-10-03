import express from 'express'
import { Getall,Deletar,createUser } from '../controllers/usercontroller.js'
const router=express.Router()

router.get('/cadastro',createUser)
router.post('/criar',Getall)
router.delete('/deletando',Deletar)

export default router
