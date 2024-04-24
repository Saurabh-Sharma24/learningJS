// Object.create() or myobj = new Object() // SINGLETON => objects made with object constructor method ; singleton means unique in it self

const mySym = Symbol("SDE")

// object literal way of declaring objects
const object1 = {
    name: "saurabh",
    age: 24,// js considered keys as string but we dont need to write it explicitly
    "email address": "saurabh@google.com",
    [mySym] : "SDE in Google" // symbol key declared with []
}
object1.salary = Number(200000).toLocaleString(); // adding new key into objects 1 with its corresponding value
console.log(object1)
console.log(object1.name)
// console.log(object1.email address) // cant access key with spcaed string value with dot notation
console.log(object1["email address"]); // can be accessed
console.log(object1[mySym]) // symbol key in object can only be accessed via [] not with dot notation

// chnaging key value in objects

object1.name = 'Saurabh Sharma' // changing object key value via dot notataion
object1["email address"] = "saurabh@openai.com" // as well as with [] notation
console.log(object1)

// Object.freeze(object1) // after object class freeze method we can not change specified object
// object1.name = 'Saurabh' // name doesnt change
// console.log(object1) 

object1.greeting = function(){ // assigning new key greeting inside object1
    console.log(`hello, ${object1.name}`)
}

console.log(object1) // greeting is declared within object1

object1.greeting() // calling greeting function of object1

// nesting of objects

const object2 = { // nested object
    userName:{
        fullName:{
            firstName: "Saurabh",
            lastName: "Sharma"
        }
    }
}

console.log(object2.userName.fullName.lastName) // accessing nested key value

// combing two objects

const obj1 = {a:1,b:2}
const obj2 = {x:3,y:4}
const obj3 = {p:6,q:6}

const newObj = Object.assign({},obj1,obj2,obj3) // assign method will add all source(ie; obj1, obj2, obj3) into target(ie; {}) and returned a modified target 
// console.log(newObj)

const mixObj = Object.assign(obj1,obj2,obj3) // if we dont specify {}, then obj1 is act like target and all source value are stored inside of it and hence it gets modified
console.log(mixObj) // storing it in a new object
console.log(obj1) // obj1 is modified

// const a =[1,2] // array combining using spread operator(...)
// const b = [3,4]
// const c = [...a,...b]
// console.log(c)

const newObject = Object.assign({},object1,object2) // object combining using assign method
console.log(newObject) 

// combing objects using spread operator

const objectUsingSpread = {...obj1,...obj2,...obj3}
console.log(objectUsingSpread)

const objectArray = [
    {
        id: 1,
        name: 'Saurabh'
    },{
        id:2,
        name: 'Rahul'
    },{
        id:3,
        name: 'Mehul'
    },
]

console.log(objectArray[2].name) // accessing array 3rd index object having name key
console.log(objectArray[2].name = 'Raj') // chnaging name 

console.log(Object.keys(object1)) // returns an array of object with their keys and values
console.log(Object.values(object1)) // returns an array of values of keys
console.log(object1.hasOwnProperty('name')) // checking if an object has property or not
console.log(Object.entries(object1)) // returns array of each individual key and value pairs