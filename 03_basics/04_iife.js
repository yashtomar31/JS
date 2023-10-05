// immediately invoked function expressions (IIFE)
// use case global variables don't polute and run first as soon as we start

function one(){
    console.log('hello world')
}
one();

// we use parenthesis to call the function, what if we add parenthesis post function itself, so we can run function directly
// so here enclose function in parenthesis, and call the function by adding parenthesis just after the function

(function two(){
    // named iife
    console.log('hello world');
})();// we need to end iife, coz it doesn't know when or where to end so add semicolon at end

(function three(name){
    console.log('hello world',name);
})('yash');// so can pass argument as well

// non named iife, just use arrow function