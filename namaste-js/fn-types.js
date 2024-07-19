//1: Function Statement
function a(){
    console.log("a called");
}                               //also  known as fn declaration
a();

//2: Function Expression
var b = function (){
    console.log("b called");
} 
b();

//3:  Function Declaration :
function a(){
    console.log("a called");
}                                   // fn statement

//4: Anonymous Function : fn without a name
function (){

}

// 5: Named Function Expression
var b = function xuz(){
    console.log()
}
b()

// difference b/w Parameters & Aguments

var b = function (param1,param2){
    console.log("b called");
} 
b(1,2);

// 6: First Class Functions : Ability to be used like values
// a.
var b = function (param1){
    console.log(param1);
} 
b(function(){

});
// here it will print f(){}

// b. 
var b = function (param1){
    console.log(param1);
} 
function xyz(){

}
b(xyz);
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

// * First Class Citizens
// same as first class fns