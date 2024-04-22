// math method

console.log(Math.floor(2.4)); // always returns nearest smallest integer
console.log(Math.ceil(2.4)); // always return nearest greater integeer
console.log(Math.round(2.4)); // round off
console.log(Math.abs(-2.4)); // negative => postive
console.log(Math.random()); // returns between 0 and 1
// trick to remember when using random method
const min = 10 // initial value
const max = 20 // final value
console.log(Math.floor(Math.random()*(max-min+1)) + min); // this will return integers between our range

// methods on numbers

const balance = 20000000

console.log(balance.toString()); // returns string
console.log(balance.toExponential()); // return exp representation
console.log(balance.toFixed(2)); // give fixed point valuee after decimal here 2 digits after decimal
console.log(balance.toPrecision(1)); // formats a number to a specified length
console.log(balance.toLocaleString("en-In")); // returns string representaion using commas