const names = ['yash','lebron']
const namesFaltu = ['shya','noblre']

names.push(namesFaltu) // it pushes array into array like ['yash','lebron',['shya','noblre']] which we might not want

names.concat(namesFaltu) // returns new array, not change in first array, but append array elements, rather than adding full array

const all_names = [...names,...namesFaltu] // this is spread element, essentially adding elements to create new array
// preferred over concat coz it works on two arrays, but here we can append n number of arrays together

const myArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // we say array into array into array

const betterMyArr = myArr.flat(Infinity) // flattens all array as elements, so spread out all values

console.log(Array.isArray('yasg')) // check if it is array or not

console.log(Array.from('yasg')) // converts that to array

console.log(Array.from({name:'James'})) // converts that to array, but here it returns empty coz not able to interpret it

let score1=1
let score2=1
let score3=1

console.log(Array.of(score1,score2,score3))// create array of given elements







