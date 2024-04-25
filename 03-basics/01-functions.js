function add(a,b){
    return a+b 
}

function addNumbers(a,b){
    console.log(a+b) // if function doesn't have return value then it returns udefined
}

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
console.log(greeting('Saurabh')) // we only logging it to console, but still not storing it
