"use strict"; // treate all JS code as new version

// There are two major datatype which are primitive and non primitive

// Primitive They are call by value
// 7 types; String,number(decimal included),boolean,null,undefined, Symbol(make value unique), BigInt
// Symbol example 

const id = Symbol('123')
const anotherId = Symbol('123')

console.table([id==anotherId,id===anotherId]) // so we can say even though values are same but symbol makes them unique

// Javascript is dynamic programming coz we do not need to define dataype before

// Refrence type (Non primitive)
// Array, Objects, Functions
// examples 
const heros = ["Ironman","Thor","Batman"]
//objects in curly bracket
let obj = {
name :'yash',
age: 22,
}

const myfunc = function(){ // function can be considered as variable
    console.log("hello world")
}

// for all non primitive types it returns object in case of typeoff

// very commonly asked question is what is output of typeof null, the ans is object

// https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator


//*******************Memory******************/

// Two types - Stack (Primitive) , Heap ( Non- Primitive)

let james = 'Lebron' // primitve so goes in stack, Pass by value so when refer the variable, so new value is passed instead of refrence

let userOne = {
    name:'Yash',
    age:22
}
let userTwo = userOne
userTwo.age = -1

console.log(userOne)
console.log(userTwo) // so same value we get, which shows pass by refrence, so original value get changed.



