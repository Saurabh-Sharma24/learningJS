function add(a,b){
    return a+b 
}

function addNumbers(a,b){
    console.log(a+b) // if function doesn't have return value then it returns udefined
}

// add  only referencing the function
// add()  now calling the function

// const result = add(12,4)
// const newresult = addNumbers(12,3)

// console.log('result1:', result)
// console.log('result2:', newresult) // output=> undefined as it is not returning anything

function greeting(username){ // function having parameter
    if(!username){
        return `please enter a valid username`
    }
    return `Hello, ${username}`
}
// console.log(greeting())//but we don't specify argument, then function returns undefined 
// console.log(greeting('Saurabh')) // we only logging it to console, but still not storing it

// rest operator(...) to getting multiple parameter in a function

function calculateTotalPrice(...num1){
    return num1; // all passed arguments are gone to num1 and returns as an array
}

// console.log(calculateTotalPrice(100,200,300,5000))

function calculateTotalPrice1(value1,value2, ...num1){// now first two value passed to function are stored in value1 and value2 and remaining values are stored in num1
    // return value1; // only returning first value
    return num1; // returning remaining value into num1
}

// console.log(calculateTotalPrice1(12,1223,124,12313)) // only returning after first two values (ie; 123, 12313)

// passing objects inside a function
const user = {
    name: 'Saurabh Sharma',
    cartPrice: 299,
}

function catchObject(anyobject){
    return `hello ${anyobject.name}, your total is ${anyobject.cartPrice}`
}

// console.log(catchObject(user))

// passing array as parameter to a function

const myarray = [1,23,43,565]

function returnArray(getArray){
    return getArray[2]
}

const value = returnArray(myarray) // storing return value by function into a variable

console.log(value)
