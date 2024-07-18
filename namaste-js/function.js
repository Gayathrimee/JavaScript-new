var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x)
}

//  output will be like:
// 10,100,1

// this is because:
//  1st it will store x as undefined then as 1
//  then go to the function a(), i.e a fn is invoked 
//  it will read x, stored as new referece and read 10, log the value
// the stack will be deleted
// then read b(), fn b is invoked:
// read x, store as new reference, read the value 100, log the value
// stack will be deleted
// then execute console.log(x) , i.e the value 1.



// 
