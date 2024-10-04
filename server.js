import express from 'express'
import Userouter from './src/routes/routes.js'
import User from './src/models/user.js'
import { Sequelize } from 'sequelize'
import config from './src/config/database.js'

const app=express()
const sequelize=new Sequelize(config)
User.init(sequelize)
app.use(express.json())
app.use('/user',Userouter)

app.get('/user',(req,res)=>{
    res.send("Rota de teste")
})

sequelize.authenticate().
then(()=>{
    console.log("Conectado com banco de dados ")
    app.listen(3000,()=> console.log('server is runing on port 3000')
)
}).catch((err)=>{
    console.log('erro'+err)
})
