//const http = require('http');

//const routes = require('./routes');

//console.log(routes.someText);

//const server = http.createServer(routes.handler);

//const server = http.createServer(app)

//server.listen(3000);
const path = require('path')
const express = require('express')
//const rootDir = require('../utils/path')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
app.use(bodyParser.urlencoded());
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(express.static(path.join(__dirname,'public')))
app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)