"use strict"; // treat all js code as newer version
// null => empty
// undefined => not assign yet
// symbol => unique

console.log(typeof null) // => objects
console.log(typeof NaN) // => number
console.log(typeof undefined) // => undefined

let score = 'saurabh'
console.log(Number (score))
console.log(typeof Number(score))
console.log(String(score))
console.log(typeof String(score))

// "12sa" => NaN
// true = 1 and strings, any other number except 0 
// and false = 0 and empty string
// " "=> false
// "saurabh" => true