// stack stores all primitive types

let a = 123
let b= a; // it gives you copy of a to b

// in heap, non primitives are stored and their value is being referenced

let userOne = {
    name: 'Saurabh',
    age: 24,
}

let userTwo = userOne // userTwo will get the reference of value of userOne