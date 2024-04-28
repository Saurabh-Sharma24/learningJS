// truthy values => string, numbers(except 0), empty array, true, empty object, empty function (){}
// falsy values => 0, null, undefined, empty string, -0, bigInt 0n, NaN

const user = {}

if(user){
    console.log("executed")
}else{
    console.log("doesn't")
}


// nullish coalescing operator (??): null, undefined => used to check between two values to avoid errors

let value;
// value = 10 ?? 20; //always returns first value if none of them is null or undefined; output: 10
// value = null ?? 10; // always returns value except null; output: 10
// value = undefined ?? 20 ?? 122 // always returns first value if it isn't null or undefined ; output: 20
// value = null ?? undefined ?? 1 // output: 1
// console.log(value)

// ternary operator

// console.log(`${value?1:3}`) // output => 3 as value is undefined 

