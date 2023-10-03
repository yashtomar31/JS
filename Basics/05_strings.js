// can be denoted by both single quoute and doube quote
age = 22
console.log("James" + age) // conatenate but old way not recommended
console.log(`Hello James your age ${age}`) // use this backquotes called backticks, so you can apply functions on string here as well
// like if we age name also as variable so we can do name.toUpper kind of stuff

const name = new String('James-Lebron') // can be used to declare string, log of properties string has, like 

console.log(name[0]) // so can get character at a string

console.log(name.length) // can use all prototypes of sring

console.log(name.toUpperCase()) // not changed original values

console.log(name.charAt(2)) // what char at pos

console.log(name.indexOf('m')) // get pos of charcater, case sensitive it is

const manString = name.substring(0,3) // last value not included (which is 3 not inclcded), ignored negative values

console.log(manString)

const slice = console.log(name.slice(-8,4)) // -8 here means start from back


// string.trim - remove lead and ending extra spaces
//ltrin start remove, rtrim end remove

// replace, string.replace(value to be replaces, value with which it is replaced)

// url.includes, does string contain in given string or not

// string.split, split based on one character
