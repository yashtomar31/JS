let myDate = new Date()

console.log(myDate) // not readable
console.log(myDate.toString()) // readable format
console.log(myDate.toDateString()) // readable format
console.log(myDate.toLocaleString()) // readable format

console.log(typeof myDate) // object as output

let myCreateedDate = new Date(2023,0,23) // month start from 0 in JS
console.log(myCreateedDate.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateedDate.getTime()) // so now we can compare timestamp and dates with timestamp, do comparision in miliseconds itself

console.log(Math.floor(myTimeStamp/1000)) // get seconds

console.log(`${myTimeStamp} my time stamp`) // string output


// mostly used function
myCreateedDate.toLocaleDateString('default',{
    weekday : "long",
}) // what we want can be defined as object, our own format