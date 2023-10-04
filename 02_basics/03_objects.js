// singleton - when we create objects from constructor then singleton but from literal then not a singleton
// Object.create()// this is constructor method creating singleton object
// here we study object literals

const mySym = Symbol("key1")
// we cannot use mySym direcly as datatype, coz if we add that it considers mySym as key
const JsUser = {
    name: 'yash',
    "full name": 'Yash Tomar',
    [mySym]: 'temp', // so to retrieve it we use JsUser[mySym] not adding quotes
    age : 25,
    email : 'ytomar2@asu.edu',
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} // created object (literal method)

// here we see two ways to access email
console.log(JsUser.email)
console.log(JsUser["email"])

// but we study 2nd way coz key can be string, and you cannot use method 1 to access
console.log(JsUser["full name"]) // method 2 possible
console.log(JsUser[mySym])

JsUser.email = 'bogus@email' // so you can change directly by reffering using key

// Object.freeze(JsUser) // we can freeze the object as well
JsUser.name = 'temp' // name won't change coz object is freezed


JsUser.greeting = function(){
    console.log("hello user")
}

JsUser.greetingTwp = function(){
    console.log(`hello user, ${this.name}`) // can be use this to refer same object
}
console.log(JsUser.greeting()) // here we had frozen object so first we have to unfreeze it

console.log(JsUser.greetingTwp())




