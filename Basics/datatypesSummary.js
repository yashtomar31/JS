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
