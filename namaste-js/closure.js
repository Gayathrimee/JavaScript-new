// function x(){
//     var a = 31;
//     function y(){
//         console.log(a)
//     }

//     y();
// }
// x();
// these are called closures.
// closure means a fn bind together with its lexical environment.

// more complicated closure 
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// (or)
// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a)
//     }
// }
// var z = x();
// console.log(z);
// z();

// .... deeper
// function x(){
//     var a = 7;

//     function y(){
//         console.log(a)
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();
// if we give the value of a as 100 before it returns; it will print 100 not 7.

// ...more deeper
// function z(){
//     var b = 900;

//     function x(){
//         var a = 7;
    
//         function y(){
//             console.log(a,b)
//         }
//         y();
//     }
//     x();
// }
// z();

// uses of closures :
// - Module Design Pattern
// - Currying
// - Functions like 'once'
// - memoize
// - maintaining state in async world
// - setTimeouts
// - Iterators
// - and many more...

// one closure example:

// function outer(){
//     var a = 10;

//     function inner(){
//         console.log(a);
//     }
//     return inner;````````````````hh
// }
// outer()();      // 2nd()-> calling the inner function, logs out 10

// (or)

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;             //change, it will work same if its 'let'
//     return inner;
// }
// var close = outer();        //change
// close();            // logs out 10

//  ....
function outer(b){
    function inner(){
        console.log(a,b);
    }
    var a = 10;   
    return inner;
}nnnnnmnnnnnmmnnn
var close = outer( "outerworld");      
close(); 

