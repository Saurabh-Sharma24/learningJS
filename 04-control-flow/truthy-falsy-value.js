// truthy values => string, numbers(except 0), empty array, true, empty object, empty function (){}
// falsy values => 0, null, undefined, empty string, -0, bigInt 0n, NaN

const user = {}

if(user){
    console.log("executed")
}else{
    console.log("doesn't")
}


// nullish coalescing operator (??): null, undefined