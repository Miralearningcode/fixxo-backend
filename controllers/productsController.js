let products = require('../data/simulated_database') //*
const express = require('express')  //*
const controller = express.Router() //*

const productSchema = require('../schemas/productSchema')  //Motsvarar den vi tidigare hade som databas innan

// unsecured routes






//middleware
controller.param("id", (httpRequest, httpResponse, next, id) => {  //Hans har (req, res, next, id) 
    httpRequest.product = products.find(product => product.id == id)  //req.user = ....
    next()  //Gör att den går vidare från middleware
})

controller.param("articleNumber", (httpRequest, httpResponse, next, articleNumber) => {   //*
    httpRequest.product = products.find(x => x.articleNumber == articleNumber) //*
    next()        //*
}) //*

controller.param("tag", (httpRequest, httpResponse, next, tag) => {   //*
    httpRequest.products = products.filter(x => x.tag == tag) //*
    next()        //*
}) //*


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
.get(async (httpRequest, httpResponse) => { //Hämtar ALLA produkter
    try {
        httpResponse.status(200).json(await productSchema.find())
   } catch {
        httpResponse.status(400).json()
   }
})
// .get((httpRequest, httpResponse) => { //*
//     httpResponse.status(200).json(products) //*
// })


//http://localhost:5000/api/products/1  Hämta produkt
controller.route("/details/:id")  //innan föreläsning 4: controller.route("/:id")
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

controller.route('/product/:articleNumber') //*
.get((httpRequest, httpResponse) => { //*
    if(httpRequest.product != undefined)
        httpResponse.status(200).json(httpRequest.product) //*
    else
        httpResponse.status(404).json()  //*
})  //*

controller.route('/:tag') //*
.get((httpRequest, httpResponse) => { //*
    if(httpRequest.products != undefined)
        httpResponse.status(200).json(httpRequest.products) //*
    else
        httpResponse.status(404).json()  //*
})  //*

controller.route('/:tag/:take') //*
.get((httpRequest, httpResponse) => { //*
    let list = []

    for (let i = 0; i< Number(httpRequest.params.take); i++)
        list.push(httpRequest.products[i])
    
    httpResponse.status(200).json(list)
})  //*



module.exports = controller //*