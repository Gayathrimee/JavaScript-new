a();
// b();        // for 1 nd 2 

// 1:     function Statement
function a(){
    console.log("a called");
}

//2:  function Expression
var b = function (){
    console.log("b called");
} 

// here it will work only for fn statement 
// and a typeError saying b is not a fn will be declared
// becz 'var b' is stored as undefined before then only it execute the fn.
// so the program will execute b() before the declaration of the fn b() 

//3:  Function Declaration :
"function statement is also known as fn declaration"

//4: Anonymous Function : fn without a name
function (){

}
// can't use anonymous fn as fn statement will show error,
//  but can use as expression

// 5: Named Function Expression
var b = function xyz(){
    console.log(xyz)
}
b()
// xyz(); // if we call this, we will get error: xyz is not defined
// that is because the xyz is not defined as a fn in the global scope, 
// but is created as local variable

// difference b/w Parameters & Aguments

var b = function (param1,param2){
    console.log("b called");
} 
b(1,2)
// the param1 and param2 are the parameters here,
// and 1 & 2 are the arguments here


// 6: First Class Functions
var b = function (param1){
    console.log(param1);
} 
b(function(){

})
// here it will print f(){}

// b. 
var b = function (param1){
    console.log(param1);
} 
function xyz(){

}
b(xyz)
// print f xyz(){}

// c.
var b = function (param1){
    return function(){

    }
} 
console.log(b());
// print f(){}

// d.
var b = function (param1){
    return function xyz(){

    }
} 
console.log(b());
// print f xyz(){}
// The ability of the fns to be used as a value (and can assigned it to a variable)
// and can be passed as arguments to another fns and can be returned from the 
// fns is known as First Class fns in JS

// * First Class Citizens
// same as first class fns
// : Functions are first class citizens     (Very Important)