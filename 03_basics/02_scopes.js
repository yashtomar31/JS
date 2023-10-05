let a = 10

if(true){
    let a = 20
    const b = 20
    var c = 30
    console.log(a)
} // these variables only declared in if scope so not available outside but not true var, coz it's global

console.log(c)// this works, it's bad coz we want block scoping but var works with global scope

// node and browser's global scope def is different

function one(){
    const username = 'yash'
    function two(){
        const web = 'git'
        console.log(username) // this will work coz username defined in parent
    }
    // console.log(web) // fail coz web defined in kid, so cannot access
    two()
}
one() // scope in js works like ice cream which is kid can get from parent but not otherwise

// another way to call function

let addTwo = function( num){
    return num+2
}
console.log(addTwo(5)) // so calling function by variable name, coz in js variable can store anything
// but here  in this case function cannot be called before declration of the variable
