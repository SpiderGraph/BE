const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')
// DB
const mongoose = require('mongoose')
// import Routes
const graphRoute = require('../routers/graphsRouter')

// Apply middleware
server.use(express.json())
server.use(helmet())
server.use(cors())
// Apply routers
server.use('/graphs', graphRoute)

server.get('/', (req, res) => {
    res.status(200).json('Heyhey')
})

// Connect to db
 mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
   () => {
     console.log('DB connected')
 })

module.exports = server

