// __________________________________________________Filter Method_______________________________________________________________ //

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// // filter => returns an array based on some condition specified in its callback

// const greaterThanFour = numbers.filter((num)=> num>4)
// // console.log(greaterThanFour)

// const books = [ // suppose it is a database call
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
//     { title: "1984", author: "George Orwell", publicationYear: 1949 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
//     { title: "1984", author: "George Orwell", publicationYear: 1949 },
//   ];
// // filtering out the all books which was published in 1949
// const bookYear1949 = books.filter((year)=>{return year.publicationYear === 1949}) // while using {} in arrow function, use return keyword to return value, () after arrow function doesn't require return keyword 
// console.log(bookYear1949)
// // give me list of books published after year 1925

// const booksAfterYear1925 = books.filter((year)=> year.publicationYear > 1925)
// console.log(booksAfterYear1925);

// __________________________________________________Map Method_______________________________________________________________ //

// // map method modifies all the element of an array and returns new array based on some operation but filter is used to return only some specified value based on some condition
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const sqrOfNumbers = numbers.map((num)=> num**2) // modifying all the element 
// // console.log(sqrOfNumbers)  

// // chaining of higher order functions

// const sqrOfOddNumbers = numbers.filter((num)=> num%2 !==0).map((num)=>num**2) // first filtering odd numbers and then squaring them

// console.log(sqrOfOddNumbers)

// __________________________________________________Reduce Method_______________________________________________________________ //

// reduce method is used to do some operation on an array and gives a single value as a result

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const sumOfNumbers = numbers.reduce((acc,curr)=>{ // acc(accumulator) => initial value here acc = 0 provided as second parameter to the reduce function 
//     console.log(`Accumulator: ${acc} CurrentValue: ${curr}`)
//     return acc+curr; // curr(current value) => curr is the value of each element of array(iterator) 
// }, 0 /* acc initial value*/)

// console.log(sumOfNumbers)

/* reduce function is same as a for loop in which we find sum of arrays like this

// const numbers = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i< numbers.length; i++){  
    let sum = 0 // here sum = acc
    sum += numbers[i] // here numbers[i] = curr
// this logic here  sum += numbers[i] is same as acc + curr in reduce
}
*/