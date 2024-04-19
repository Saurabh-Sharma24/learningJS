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

// comparison with strings
console.log('2'> 1 ) // true because string value is converted to number and then compared 
console.log('23a'> 2) // comparison with NaN always returns false 
console.log(undefined > 2) // comparison with undefined always returns false 

// null and comparison

console.log(null == 0) // false because null=> object and 0=> number
console.log(null>0) // results false as comparison operator changes null to 0 and 0 can not be greater than 0
console.log(null === 0) // false as it checks both type and value and their type is not equal hence its false  