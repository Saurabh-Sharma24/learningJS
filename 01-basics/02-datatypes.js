//learning from chai aur code YT 

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

// primitive(are call by value because it returns value of data ) datatypes and non primitive ("Reference types are stored by reference to their location in memory."
// 6 primitives types => number, string, null, undefined, boolean, symbol (NaN is not a primitive its a special value of a number type)
// referenced type (non-primitive) => array, objects, functions

/*

 a = null and b = undefined whats the difference

 In JavaScript, both `null` and `undefined` represent the absence of a value, but they are used in different contexts and have slightly different meanings:

1. `null`: Typically, you assign `null` to a variable when you want to explicitly indicate that the variable has no value or that it points to no object. It's a deliberate assignment by the programmer to signify emptiness or absence of value.

   ```javascript
   let a = null;
   ```

2. `undefined`: This usually indicates that a variable has been declared but has not yet been assigned a value. It's the default value for uninitialized variables, function parameters that have not been provided, and for the return value of functions that don't explicitly return anything.

   ```javascript
   let b;
   ```

   In this case, `b` will be `undefined` until it's assigned a value.

So, the main difference between `null` and `undefined` is the context in which they are used:

- `null` is typically used as a deliberate assignment to indicate the absence of a value.
- `undefined` usually indicates an uninitialized variable or a value that hasn't been provided.

Understanding these differences helps in writing clear and meaningful code. If you have any more questions or need further clarification, feel free to ask!

*/

// symbol

const a1 = Symbol('123') // symbol uniquely assign a value to a variable
const a2 = Symbol("123") // the decription given to symbol  is same but still it produces two diffrerent unique symbol for both a1 and a2
console.log(a1 === a2) // false