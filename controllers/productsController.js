const express = require('express')  
const controller = express.Router() 

const productSchema = require('../schemas/productSchema') 


// Unsecured routes

controller.route('/')
.get(async (httpRequest, httpResponse) => { 
    const products = []
    const list = await productSchema.find()
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,  
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        httpResponse.status(200).json(products)
    } else
        httpResponse.status(400).json()
})  

// Get a specific product
controller.route('/details/product/:articleNumber') //* Hans har '/product/details/:articleNumber'
.get(async (httpRequest, httpResponse) => { 
    const product = await productSchema.findById(httpRequest.params.articleNumber)
    if(product) {
        httpResponse.status(200).json({
            articleNumber: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tag: product.tag,
            imageName: product.imageName,
            rating: product.rating
        })
    } else
        httpResponse.status(404).json()
}) 

controller.route('/:tag') 
.get(async (httpRequest, httpResponse) => {
    const products = []
    const list = await productSchema.find({ tag: httpRequest.params.tag})
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        httpResponse.status(200).json(products)
    } else
        httpResponse.status(400).json()
})  

controller.route('/:tag/:take') 
.get(async (httpRequest, httpResponse) => { 
    const products = []
    const list = await productSchema.find({ tag: httpRequest.params.tag}).limit(httpRequest.params.take)
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        httpResponse.status(200).json(products)
    } else
        httpResponse.status(400).json()
})  


// Secured routes

// Add a product
controller.route('/')  
.post(async (httpRequest, httpResponse) => {
    const { name, description, price, category, tag, imageName, rating} = httpRequest.body

    if (!name || !price )
        httpResponse.status(400).json({text: 'name and price is required'})
    
    const exists = await productSchema.findOne({name})
    if (exists)
        httpResponse.status(409).json({text: 'A product already exists with that name'})
    else {
        const product = await productSchema.create({
            name,
            description,
            price,
            category,
            tag,
            imageName, 
            rating
        })
        if (product)
            httpResponse.status(201).json({text: `Product with article number: ${product._id} was successfully added`})
        else
            httpResponse.status(400).json({text: 'Something went wrong, could not create a new product'})
    }
})

// Delete a product
controller.route('/:articleNumber')  
.delete(async (httpRequest, httpResponse) => {
    if(!httpRequest.params.articleNumber)
        httpResponse.status(400).json('Missing articlenumber')
    else {
        const product =  await productSchema.findById(httpRequest.params.articleNumber)  //Hans har item
        if (product) {
            await productSchema.remove(product)
            httpResponse.status(200).json({text: `Product with article number: ${httpRequest.params.articleNumber} was successfully deleted`})
        } else {
            httpResponse.status(404).json(`Product with article number: ${httpRequest.params.articleNumber} could not be found` )
        }
    }
})

// Update a product
controller.route('/details/product/:articleNumber')   //eller '/details/product/:articleNumber'
.put(async (httpRequest, httpResponse) => {
    const product = await productSchema.findById(httpRequest.params.articleNumber)  //Find the product
    const { name, description, price, category, tag, imageName, rating} = httpRequest.body
    
    const update = await productSchema.findByIdAndUpdate(httpRequest.params.articleNumber, httpRequest.body)
    if (update) {
       httpResponse.status(201).json({text: `Product with article number: ${product._id} was successfully updated`})
    } else if (!product) {
        httpResponse.status(404).json({text: 'Could not find a product with that article number'}) //If it does'nt exist, return 404
    } else {
         httpResponse.status(400).json({text: 'Something went wrong, could not update the product'})
    }
        
}) 


// //Update a product
// controller.route('/:articleNumber')   //eller '/details/product/:articleNumber'
// .put(async (httpRequest, httpResponse) => {
//     const { name, description, price, category, tag, imageName, rating} = httpRequest.body
//     const product = await productSchema.findById(httpRequest.params.articleNumber)  //Find the product
    
//     if (!product) {
//         httpResponse.status(404).json()
//         console.log("error")
//     } else {
//         httpResponse.status(200).json
//     }
//     const updateProduct = await productSchema.findByIdAndUpdate(httpRequest.params.articleNumber, httpRequest.body)
// }) 
        
        
        // const exists = await productSchema.findById({})
        // if (exists) {
        //     const updateProduct = await productSchema.updateOne({})
        //     if (product)
        //         httpResponse.status(201).json({text: `Product with article number: ${product._id} was successfully updated`})
        //     else
        //         httpResponse.status(400).json({text: 'Something went wrong, could not update the product'})
        // }

        
    



//Othervise validate the product
//If invalid, return 400 - badrequest

//Update product
//Return the updated product


    // productSchema.findByIdAndUpdate
 

    // const product = await productSchema.findById(httpRequest.params.articleNumber) 
    // if(product) {
    //     httpResponse.status(200).json({
    //         articleNumber: product._id,
    //         name: product.name,
    //         description: product.description,
    //         price: product.price,
    //         category: product.category,
    //         tag: product.tag,
    //         imageName: product.imageName,
    //         rating: product.rating
    //     })
        
    // } else
    //     httpResponse.status(404).json() // 
    

    

    // productSchema.updateOne({
    //     name,
    //     description,
    //     price,
    //     category,
    //     tag,
    //     imageName, 
    //     rating
    // })





module.exports = controller 