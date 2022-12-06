require('dotenv').config()
const port = process.env.WEBAPI_PORT || 6000 //Hans har 9999, ha inte 5000 för då har båda portarna 5000 då ser man inte vilken som körs
const initMongoDB = require('./server-mongodb')
const cors = require('cors') 
const bodyParser = require('body-parser') 
const express = require('express') 
const app = express() 


// middleware      system -> middleware -> app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  //Hanterar formulärdata, även lite mer anvancerad forumlärdata t.ex bilder ture eller false spelar ingen roll här
app.use(cors()) 
app.use(bodyParser.json()) 


// routes/controllers
const productsController = require('./controllers/productsController') 
// const { json } = require('express') ska denna vara med?
app.use('/api/products', productsController) 


// initialize
initMongoDB()
app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`)) 