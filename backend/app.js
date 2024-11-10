const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

const port = process.env.PORT || 3001

// db connection
const conn = require('./db/conn')

conn()

// routes
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(port, function(){
  console.log('Servidor on-line!')
})