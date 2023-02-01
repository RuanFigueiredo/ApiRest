const express = require('express')
const cors =require('cors')
const knex= require('knex')
const mysql = require('mysql2')

const router = require('./src/routes/routes')

const app = express();
app.use(cors())
app.use(express.json())
app.use(router)



app.listen(4000,()=>{
    console.log("aplicação rodando na porta 4000")
})

app.get('/', (request, response)=>{
    response.send("hello world")
})


