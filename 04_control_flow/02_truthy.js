const userEmail = 'ytomar2@asu.edu'

if(userEmail){ // default string is true, if string is null or empty then it is false
    console.log('gotEmail')
}

//falsy values
// false, 0,-0, BigInt - 0n, "", null, undefined , NaN
// truthy values
// '0', 'false', ' ', [], {}, function(){} - > empty function , all other values

// to detect object is empty or not ?
let obj = {}
if(Object.keys(obj).length===0){// get keys of object
    console.log('empty')
}

//false==true -> true
// false == ''-> true
// false == 0 -> true

// Nullist Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 // safety checks, if null or undefined then assign post value
val1 = null ?? null?? 15
console.log(val1);

// Terniary Operator

// condition ? true : false
const temp = 100
temp>= 80 ? console.log('greater than 80') : console.log('less than 80')