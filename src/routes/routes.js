import express from 'express'
import { Getall,Deletar,createUser,updateUser} from '../controllers/usercontroller.js'
const router=express.Router()

router.get('/Allusers',Getall)
router.post('/cadastro',createUser)
router.delete('/deletando',Deletar)
router.put('/upadte',updateUser)

export default router
