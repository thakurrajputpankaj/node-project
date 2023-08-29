//const http = require('http');

//const routes = require('./routes');

//console.log(routes.someText);

//const server = http.createServer(routes.handler);

//const server = http.createServer(app)

//server.listen(3000);

const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
app.use(bodyParser.urlencoded());
app.use(adminRoutes)
app.use(shopRoutes)


app.listen(3000)