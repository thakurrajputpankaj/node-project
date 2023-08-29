const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{
    //console.log('In the main Middle ware')
    res.send('<h1>Hello From Express JS</h1>')
    //next(); // to call the next middle ware functions
})
module.exports = router