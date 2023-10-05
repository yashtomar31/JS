// write logic of 10-20 lines, and enclose as package and use it everywhere

function sayMyName(name){ // no need to give type but user can pass anything so problem, input of fuction here is called parameters
    for(let i =0;i<name.length;i++){
        console.log(name[i])
    }
}

const result = sayMyName('Yash') // call function by calling name and refrence, and the input which is passed is called argument

console.log(result) // we have not defined  returned type yet so not possible

function sayMyName(name){ 
    return `${name} logged in`
}

const result2 = sayMyName('Yash') // now return type is defined
console.log(result2)

const result3 = sayMyName() // if we pass null, we get output as undefined logged in, coz not defined
console.log(result3)

function sayMyNameSecond(name){ 
    if(!name){// be default js treats undefined and empty string as false
        console.log('please enter name')
        return
    }
    return `${name} logged in`
}
sayMyNameSecond() // now empty string returns, please enter name

function sayMyNameThird(name= 'James'){ // passing default values in parameters
    if(!name){// be default js treats undefined and empty string as false
        console.log('please enter name')
        return
    }
    return `${name} logged in`
}

function calculateCartPrice(...num1){ // we might not know exactly how many inputs are passed so that's why use rest operator ...
    /// ... can be called rest or spread operator depends on use case
    return num1
}

console.log(calculateCartPrice(200,400,500)) // display output as array

