import express from 'express'
import mongoose from 'mongoose' 
import Cr from './Routes/CategoryRoutes.js'
import gm from './Routes/Game.Routes.js'
import cors from 'cors'
import cl from './Routes/ClientRoutes.js'
import by from './Routes/BuyRoutes.js'
const app=express()
app.use(cors())

app.listen("8080",()=>{
console.log("server run");

})
app.use(express.static('pic'))
app.use('/Category',Cr)
app.use('/Game',gm)
app.use('/Client',cl)
app.use('/Buy',by)

mongoose.connect('mongodb://0.0.0.0:27017/game_shop')
.then(()=>{
console.log("connect mongo");

})
.catch((err)=>{
console.log(err.message);

})
