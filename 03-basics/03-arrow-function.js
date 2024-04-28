const user = { 
    name: "saurabh",
    welcomeMessage: function(){ // referencing current context with this keyword
        console.log(`${this.name}, welcome to website`) // this.name allows to us name property of user object via this keyword only whithin the context where object is defined
        // console.log(this) this will return current context object,  user in this case 
    }

}

console.log(user.welcomeMessage())
console.log(this)// here this will return global context object which is empty(in node environment), this will returns window object in browser

function fun(){
    username = 'Saurabh'
    console.log(this.username) // returns underined as this is only works whithin object context
}

console.log(fun()) // undefined

const funnyFunction = () => { // arrow function
    return `Hello`
}

const arrowFun = (num1,num2) => (num1+num2) //(implicit return) single expression doesn't require return keyword, we can use () but () also not required
console.log(arrowFun(1,2))

const returnObject = () => ({username: 'Saurabh', id: 12}) // always wrap object inside () while using arrow function
console.log(returnObject())