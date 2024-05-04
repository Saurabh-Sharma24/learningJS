const myArray = [1,2,3,4,5]

// array methods

console.log(myArray.length) // returns length 
console.log(myArray.join()) // return strings and then join them together
console.log(myArray.includes(3)) // returns true if value exist else false 
console.log(myArray.indexOf(2)) // returns indexof given element if exist else -1
// console.log(myArray.splice(1,3)) // splice method removes and return the ranged argument elements from the array and modified the array 
console.log(myArray); // array after splice method call
console.log(myArray.slice(1,3)); // SLICE METHODS RETURN THE SECTION OF ARRAY BUT ORIGINAL ARRAY REMAINS UNMODIFIED
console.log(myArray); // ORIGINAL ARRAY IS UNMODIFIED
console.log(myArray.pop()); // returns last elements from the array and modified the given array
console.log(myArray); // modified array after pop call
console.log(myArray.push(5)); // push method inserts element at the end of array and modified given array
console.log(myArray); // modified array after push call
console.log(myArray.unshift(1,3)) // unshift call adds given values at the beginning of array and returns modified array length
console.log(myArray) // modified array after unshift call
console.log(myArray.shift()) // removes first element from array and return it and modified the array
console.log(myArray) // modified array after shift 

const marvelHeroes = ['spiderman', "thor", "ironman", "captain america"]
const dcHeroes = ["superman","aquaman","batman","flash"]

const mixHeroes = marvelHeroes.concat(dcHeroes) // merging two arrays using concat method 
console.log(mixHeroes) // merged array

const allHeroes = [...marvelHeroes,...dcHeroes] // ... spread operator works on iterable (strings and arrays) and returns their individual element
console.log(allHeroes)

const mixArray = [1,2,3,[4,5],6,[7,8,9,[10,11]]] // nested array
const flatArray = mixArray.flat(Infinity) // returns all nested or without nested elementb into a single array, flat method parameter defines depth to which array should be flatted
console.log(flatArray); //output=> [1,2,3,4,5,6,7,8,9,10,11]


console.log(Array.isArray('Saurabh'))// checks whether a given value is an array
console.log(Array.isArray(mixArray))// true

console.log(Array.from('Saurabh')) // returns an array from only one specified value

const value1 = 12;
const value2 = 13;
const value3 = 14;

console.log(Array.of(value1,value2,value3)) // returns an array of multiple specified values

const n = 'a'
console.log(isNaN(n))