if(2=='2'){
    console.log('executed') // this executes, we use === for datatype match as well
}

// var is global, even though we create var in if scope but still outside we can access it
// which is bad, so don't use

if(1==1) console.log('test'), console.log('test2'); // we can use this as implicit scope

let key = 11
switch (key){
    case 10:
        console.log('10') 
        break; // we add break otherwise, post the matching case all statement executes except the default one
    case 11:
        console.log('11') 
        break; //
    
    default:
        console.log('defaul')
        break;
}

