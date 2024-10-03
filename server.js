import express from 'express'
import Userouter from './src/routes/routes.js'
const app=express()
app.use(express.json())
app.use('/user',Userouter)

app.listen(4000,()=>console.log("server is running..."))
