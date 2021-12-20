const express = require('express')
const app = express()
const port = 3000;


app.get('/',(req,res) =>{
    res.send("Welcome to my site, SKRRRR!")
})

app.get('/new-route',(req,res) =>{
    res.send("Nueva ruta")
})

app.get('/products',(req,res)=>{
    res.json([
    {
        name:'Product 1',
        cost: 420
    },
    {
        name:'Product 23',
        cost: 1500
    }])
})

app.get('/products/:id',(req,res)=>{
    const { id }  = req.params; //Captura el parametro id, req.params captura todos los valores que tengan ":" exp: ":id"
    res.json({
        id,
        name: "Product",
        cost: 350
    })
})

app.get('/categories/:categoryId/products/:productId',(req,res) =>{
    const {productId, categoryId }= req.params;
    res.json({
        categoryId,
        productId  
    });
})

app.listen(port,()=>{
    console.log("Listen port: "+port)
})