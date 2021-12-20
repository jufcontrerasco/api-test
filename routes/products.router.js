const express = require('express');

const router = express.Router(); //Invoco un Router de Express

router.get('/',(req,res)=>{
   /* res.json([
    {
        name:'Product 1',
        cost: 420
    },
    {
        name:'Product 23',
        cost: 1500
    }])*/
})

router.get('/:id',(req,res)=>{
    const { id }  = req.params; //Captura el parametro id, req.params captura todos los valores que tengan ":" exp: ":id"
    /*res.json({
        id,
        name: "Product",
        cost: 350
    })*/
})

module.exports = router;