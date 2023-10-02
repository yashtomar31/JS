const accountId = 16122 // to declare 
let accountEmail = "yash123@gmail.com" // preferred for variable declaration, scope problem solved
var accountPassword = "1234" //Not preferred anymore,coz problem in scoping
accountCity = "Tempe" // don't use
let accountState; // variable decrlared but not assigned then it prints undefined
// accountId = 2 (cannot do) const - Fixing variable values you cannot change later

/*
prefer not to use var
because of issue in block and function scope
*/
accountEmail = "222@gmail.com" // Possible to change
accountPassword = "james" // Possible to change
accountCity = "SF" // Possible to change
console.table([accountEmail,accountPassword,accountCity,accountState]);