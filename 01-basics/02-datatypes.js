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

// postfix increment
let a =2;
let b = a++; // first b = a and then a = a + 1 (a++)
console.log(`a: ${a} b: ${b}`)

// prefix increment
let x =2;
let y = ++x; // first y = x + 1 and then x = x+1
console.log(`x: ${x} y: ${y}`)