require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/dbConnection')
const router = require('./routes/router')

const cookPediaServer = express()

cookPediaServer.use(cors())
cookPediaServer.use(express.json())
cookPediaServer.use(router)

const PORT = 4000 || process.env.PORT

cookPediaServer.listen(PORT,()=>{
    console.log(`CookPedia Server started at port: ${PORT} and waiting for client requests!!!!`);
})
//http get request resolving to http://localhost:3000/
cookPediaServer.get('/',(req,res)=>{
    res.send(`<h1>CookPedia Server Started and waiting for client requests!!!</h1>`)
})