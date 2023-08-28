// node first-app.js
const fs = require('fs')
const { text } = require('stream/consumers')

fs.writeFileSync('hello.txt','Hello from node js')
//Spread Operator

const hobbies = ['Pankaj','Rajput']
const person = {
    name : 'Pankaj',
    age : 25,
    greet(){
        console.log("Hey There ! Greetings from panks")
    }
}
const copiedArray = [...hobbies]
const copiedPerson = {...person}
console.log(copiedArray)
console.log(copiedPerson)

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4,5))

//Destructing 

const printName = ({name}) =>{
    console.log(name)
}
printName(person)

const {name, age} = person;
console.log(name,age)

const [element1, element2] = hobbies
console.log(element1,element2)

//Async Codes and Promises
const fetchData = callback =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //callback('Done Here')
            resolve('Done Here')
        },1500)
    })
    return promise;
}
setTimeout(()=>{
    console.log('Timer is Done')
    /*
    fetchData(text=>{
        console.log(text)
    })
    */

    fetchData().then(result=>{
        console.log(result)
        return fetchData();
    }).then(result=>{
        console.log(result)
    })
},2000)


