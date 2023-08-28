// node first-app.js
const fs = require('fs')

fs.writeFileSync('hello.txt','Hello from node js')
//Spread Operator

const hobbies = ['Pankaj','Rajput']

const copiedArray = [...hobbies]

console.log(copiedArray)