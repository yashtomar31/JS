const tinderUser1 = new Object() // singleton object
const tinderUser2 = {} // literal object/ non singleton object
tinderUser2.name = 'myLifeisSingle'
console.log(tinderUser2.fullname?.name) // ? used when response comes from api and it may not have, so avoids failing of code

// combine objects
const obj1 = {1:'a',2:'a'}
const obj2 = {3:'a'}
const obj3 = {3:'b'}
const obj4 = Object.assign({},obj1,obj2,obj3) // {} optional parameter but we should give so all goes into {} empty object, first value
// is target value, which appends to same object
console.log(obj4)
const obj5= {...obj1,...obj2,...obj3} // better most of time
console.log(obj5)
Object.keys(obj5) // return keys of object

// Object.entries() // convert object to arrays

tinderUser2.hasOwnProperty('james') // check if property is there or not in object

// destructuring of array and object is possible

const course = {
    courseName : 'js',
    price : 0,
    courseInstructor: 'yash'
}

const {courseInstructor : instructor} = course // so problem is everytime we need to write course.courseInstructor
// so people use above method to get courseInstructor, so now people can just use instructor to refer
// so whenever we see curly braces we know, destructuring is done
console.log(instructor)