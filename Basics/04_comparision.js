// problem occurs when data type is not of same type, so here data is not predictable 

console.log("2">1) // like "2" gets converted to number

console.log(null > 0); false
console.log(null == 0); false
console.log(null >= 0); true

// so not predictable, reason is equality check == and comparisions (>,<,>=,<=) works differently. Comparision converts null to numbers

// === strict check (Check values as well as datatype like "2"===2 is false coz different datatype)
