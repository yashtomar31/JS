let num = null
const balance = new Number(num) //making forced constructor for number
console.log(balance)

num = 1
console.log(num) // output simple 1
num = new Number(num) //making forced constructor for number
console.log(num) // output [ Number : 1]

console.log(num.toFixed(3)) // fixing decimal values

console.log(12.33.toPrecision(3)) // output 12.3
console.log(12.33.toPrecision(2)) // output 12
console.log(12.33.toPrecision(1)) // output 1e+1

//toLocaleString() represent values with 0, can pass 'en-IN' as input to get india value with comma after two zeros

// *********** MATHS *******************************
console.log(Math) // object of math eg Math.abs(), Math.pi

console.log(Math.random()) // mostly used function - so output random between 0-1 like 0.6912

// range between min and max

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+ min)


