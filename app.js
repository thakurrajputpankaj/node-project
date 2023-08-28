const http = require('http') 

const server =  http.createServer((request,result) => {
    console.log(request)
});

server.listen(3000);
