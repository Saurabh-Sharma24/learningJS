var a = 1; // global scope

if(true){
    var a = 2; // a is modified
    const b = 3;
    let c = 4;
}

console.log(a) //(modified a) var can be accessed outside block scope
// console.log(b) // const can not be accessed outside of block scope
// console.log(c) // let can not be accessed outside of block scope

// global scope is different for windows(browser) amd for node