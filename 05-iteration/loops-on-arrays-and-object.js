const arr = [1,2,3,4,5,6,7,8]
const str = "Saurabh"
// for of loop

for (const value of str){ // iterate through each value of arr
    // console.log(value)
}

// map object => just like set in python; map holds unique key value pairs

const map = new Map(); // declaring a map
map.set('a',1)// setting value in map object
map.set('b',2)
map.set('c',3)
map.set('c',3)// can not assign duplicate value, 

// console.log(map)
// console.log(map.size)
// console.log(map.keys())

// looping through map

for(const keys of map){
    // console.log(keys) // returns each key value as array
}

for (const [keys,value] of map) { // destructuring array into key and values
    // console.log(`${keys} : ${value}`)
}

// iterating through objects for in loop

const myObject = {
    js: "Javascript",
    py: "Python",
    cpp: "C++",
    html: "HTML",
}


for(const key in myObject){
//    console.log(`${key} stands for ${myObject[key]}`)
}

const myArr = ['js','py','rb']

for (const key in myArr) { // using for in loop gives index of array element
    // console.log(key) // index of array
}

for (const key in map) {
    // console.log(map) // map is not iterable hence for in loop does not work in map
}

// for each loop: runs on iterable objects(like array, strings, objects etc) => generally used to find object value inside in an array

const programmingLanguages = [
    {
        Name: 'Javascript',
        Extension: 'js'
    },
    {
        Name: 'Python',
        Extension: 'py'
    },
    {
        Name: 'Java',
        Extension: 'java'
    },
    {
        Name: 'C++',
        Extension: 'cpp'
    },
]

// console.log(programmingLanguages)
// for each loop is mostly use to extract data from array which is comming from database as array of objects form
// programmingLanguages.forEach((value)=>console.log(value.Name)) // for each loop takes callback as argument, and 
// myArr.forEach((i)=> console.log(i)) // for each loop goes throught iterable elements not their index as for in loop does 

// foreach loop doesn't return anything

const value = myArr.forEach((item)=>{ return item} ) // doesn't retrun anything

