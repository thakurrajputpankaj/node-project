const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')
const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    console.log('In the Product Middle ware')
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    //next(); // to call the next middle ware functions
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})



module.exports = router