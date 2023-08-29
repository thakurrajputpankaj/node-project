const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../utils/path')

router.get('/',(req,res,next)=>{
    //console.log('In the main Middle ware')
    //res.send('<h1>Hello From Express JS</h1>')
    //next(); // to call the next middle ware functions
    // ../ is root parent directory
    res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports = router