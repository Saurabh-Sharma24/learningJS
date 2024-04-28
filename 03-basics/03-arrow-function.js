const user ={
    name: "saurabh",
    welcomeMessage: function(){ // referencing current context with this keyword
        console.log(`${this.name}, welcome to website`) // this.name allows to us name property of user object via this keyword only whithin the context where object is defined
        // console.log(this) this will return current context object,  user in this case 
    }

}

console.log(user.welcomeMessage())
console.log(this)// here this will return global context object which is empty
