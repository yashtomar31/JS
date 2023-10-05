const user = {
    username : 'Yash',
    age : 25,
    welcomeMessage: function(){
        console.log(`welcome ${this.username}`) // we need to use this keyword to refer to the same scope / current context
        console.log(this)// prints the object here, coz current context is object, and it works only in objects not in function
    }
}

user.welcomeMessage()
user.username = 'lbj'
user.welcomeMessage() // so value here changes coz we have changed the context here, essenitally context are values

console.log(this)// here we get empty {} coz current context is null, no global context
// but if we run this in browser we get value as window, so browser's global object is window object


function trial(){
    console.log(this)// prints some random value
}
trial()

let trial2 = function (){
    console.log(this)// prints some random value
}
trial2()
// so output of above and below functions are same

let trial3 = () =>{ // this is arrow function
console.log(this)
}
trial3() // here we see that it's undefined not like 2 functions above

// so we study arrow function coz it is similar to react and used at lot there

let trial4 = (num1,num2) => ( num1+num2)
// so whenever we use curly bracket then it is mandatory to use return, but in parenthesis we can directly return the values
// without return statement, this is implicit return

const myArr = [2,5,6,7]
// myArr.forEach ((i)=>(i+1)) arrow function can be use in loops
// console.log(myArr)
