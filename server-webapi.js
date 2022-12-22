require('dotenv').config()
const port = process.env.WEBAPI_PORT || 6000 
const initMongoDB = require('./server-mongodb')
const cors = require('cors') 
const bodyParser = require('body-parser') 
const express = require('express') 
const app = express() 


// middleware   system -> middleware -> app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  
app.use(cors()) 
app.use(bodyParser.json()) 


// routes/controllers
const productsController = require('./controllers/productsController') 
app.use('/api/products', productsController) 


// initialize
initMongoDB()
app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`)) 