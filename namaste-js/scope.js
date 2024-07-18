// scope in JS is directly related to lexical environment

// function a(){
//     console.log(b);
// }
// var b = 10;
// a();
//  this will print an output 10

// now,
//  function a(){
//     function c(){
//         console.log(b)
//     }
//     c()
//  }
//  var b = 100;
//  a();
//  this will print an output 100

// now,
// function a(){
//     var b = 1;

//     function c(){
//         console.log(b)
//     }
//     c()
//  }
//  a();
//  output : 1

//  now, what if its vice-versa:

function a(){
    var b = 5;
    function c(){

    }
    c();
}
a()
console.log(b)
//  will show that 'b' is not defined

// SCOPE
// Scope is where u can access a specific variable or function in our code 

//