var a = 1; // global scope; global scope variable can be accessed anywhere in code

if(true){
    var a = 2; // a is modified
    const b = 3;
    let c = 4;
}

// console.log(a) //(modified a) var can be accessed outside block scope
// console.log(b) // const can not be accessed outside of block scope
// console.log(c) // let can not be accessed outside of block scope

// global scope is different for windows(browser) amd for node



// console.log(add(2,3)) // regular function can be called before there initialisation
function add(num1,num2){ // regular function
    return num1+num2
}

// console.log(sub(12,5)) // function expression can not be accessed before initialisation
const sub = function(num1,num2){ // function expression
    return num1-num2;
}