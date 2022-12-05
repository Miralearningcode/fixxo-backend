const port = process.env.PORT || 5000 //*
const cors = require('cors') //*
const bodyParser = require('body-parser') //*
const express = require('express') //*
const app = express() //*

// middleware      system -> middleware -> app
app.use(cors()) //*
app.use(express.urlencoded({ extended: true }))  // * Hanterar formulärdata, även lite mer anvancerad forumlärdata t.ex bilder
app.use(bodyParser.json()) //*

// routes/controllers
const productsController = require('./controllers/productsController') //*
// const { json } = require('express') ska denna vara med?
app.use('/api/products', productsController) //*



// start web api
app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`)) //*