const mySym = Symbol("SDE")

const object1 = {
    name: "saurabh",
    age: 24,// js considered keys as string but we dont need to write it explicitly
    "email address": "saurabh@google.com",
    [mySym] : "SDE in Google" // symbol key declared with []
}

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


