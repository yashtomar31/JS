"use strict"; // treate all JS code as new version

let score = 33;
console.log( typeof score) // 1
console.log( typeof (score)) // 2 [1 and 2 are same]
//const {score} = req.body // getting input from front end, but we are not sure whether this is string or what so need to check type

score = "33" // so input from html in string but we know it should be number

let ValueInNumber = Number(score) // so we can use this function to convert string to number
console.log( typeof ValueInNumber)

score = "33abc" // so added string to number as well

ValueInNumber = Number(score) // so we can use this function to convert string to number
console.log( typeof ValueInNumber) // still we get type as number
console.log( ValueInNumber) // actually we get NaN, so no strict check here, so we should check if value is NaN or not


score = null // null as input

ValueInNumber = Number(score) // so we can use this function to convert string to number
console.log( typeof ValueInNumber) // still we get type as number
console.log( ValueInNumber) // actually we get 0, so null converts to 0, so should check

score = undefined // undefined as input

ValueInNumber = Number(score) 
console.log( ValueInNumber) // Nan as output

score = true

ValueInNumber = Number(score) // output as 1

score = false

ValueInNumber = Number(score) // output as 0

let isLoggedIn = 1

// Boolean() conversion 1 - true, 0 - false, "" - false, "yash" - true

// *************** Operations ******************

let value = 3
let negValue = -value
console.log(negValue)
console.log(2**3) //2^3

let str1= "hello"
let str2= "yash"
let str3 = str1+str2 // string concatentation

console.log("1"+2) // "12" JS smart to convert
console.log(1+"2") // "12" JS smart to convert
console.log("1"+2+2) // "122" 
console.log(1+2+"2") // "12" JS smart to convert - look at tc39 for conversion algo

//ToPrimitive - function to convert into another Form

console.log(+true); // possible, + converts to number
// console.log(true+); // not possible, here true comes first then + so error

let num1,num2,num3

num1=num2=num3=2+2 // works but bad way to write

// prefix and postfix operator - i++, ++i read on tc39


