// Also refer note.js

// What is a callback fns in Js:

// function x(y){

// }
// x( function y(){
    
// })

// Callback in Asynchronous Path

setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}
x (function y(){
    console.log("y")
}); 
// : output -> x y timer