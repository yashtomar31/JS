// array
// array always create shallow copy, share same refrence to the point
const myArr = [0,1,2,3,4,true,'hitesh'] // can be any element
const myArr2 = [34,5]
const myArr3 = new Array(1,2,3)
for(let i=0;i<myArr.length;i++){
console.log(myArr[i])
}

// Array Methods

myArr.push(6) // commonly used, insert values into array
myArr.pop() // remove last value from array
myArr.unshift(9) // insert at start of array, so all values will be shifted so time taking operation
myArr.shift() // remove element at start
myArr.includes(9) // check if number in array
myArr.indexOf(19)// if value return index, otherwise retun -1

myArr.join() // join elements as string

// slice, splice

console.log( "A ",myArr);

const myn1 =  myArr.slice(1,3) // return elements from 1 to 2
console.log(myn1)
console.log( "A ",myArr);

const myn2 =  myArr.splice(1,3) // return elements from 1 to 2
console.log(myn2) // return including index of 3, also changes original array this function, essentially leaves the remaining element in original array
console.log( "A ",myArr);



