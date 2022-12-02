const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')


//middleware
controller.param("id", (httpRequest, httpResponse, next, id) => {  //Hans har (req, res, next, id) 
    httpRequest.product = products.find(product => product.id == id)  //req.user = ....
    next()  //Gör att den går vidare från middleware
})

//http://localhost:5000/api/products  Lägga till produkt
controller.route('/')
.post((httpRequest, httpResponse) => {
    let product = {
        id: (products[products.length -1])?.id > 0 ? (products[products.length -1])?.id + 1 : 1,
        articleNumber: httpRequest.body.articleNumber,
        name: httpRequest.body.name,
        description: httpRequest.body.description,  
        category: httpRequest.body.category,
        price: httpRequest.body.price,
        rating: httpRequest.body.rating,
        imageName: httpRequest.body.imageName
    }
    products.push(product)
    httpResponse.status(201).json(product)
})
.get((httpRequest, httpResponse) => {
    httpResponse.status(200).json(products)
})


//http://localhost:5000/api/products/1  Hämta produkt
controller.route("/:id")
.get((httpRequest, httpResponse) => {
    if (httpRequest.product != undefined)
        httpResponse.status(200).json(httpRequest.product)
    else 
        httpResponse.status(404).json()
})
.put((httpRequest, httpResponse) => {
    if (httpRequest.product != undefined) {
        products.forEach(product => {
            if (product.id == httpRequest.product.id) {
                product.articleNumber = httpRequest.body.articleNumber ? httpRequest.body.articleNumber : product.articleNumber
                product.name = httpRequest.body.name ? httpRequest.body.name : product.name
                product.description = httpRequest.body.description ? httpRequest.body.description : product.description
                product.category = httpRequest.body.category ? httpRequest.body.category : product.category
                product.price = httpRequest.body.price? httpRequest.body.price : product.price
                product.rating = httpRequest.body.rating ? httpRequest.body.rating : product.rating
                product.imageName = httpRequest.body.imageName ? httpRequest.body.imageName : product.imageName
            }
        })
        httpResponse.status(200).json(httpRequest.product)
    }
    else 
        httpResponse.status(404).json()
})
.delete((httpRequest, httpResponse) => {
    if (httpRequest.product != undefined) {
        products = products.filter(product => product.id !== httpRequest.product.id)
        httpResponse.status(204).json()
    }
    else 
        httpResponse.status(404).json()
})





module.exports = controller