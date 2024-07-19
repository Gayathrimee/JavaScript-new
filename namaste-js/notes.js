// what is a callback fns in Js:

// In first class fn, we can take a fn and pass into an another fn;
// The fn which we pass into another fn is called a Callback fn

function x(y){

}
x( function y(){
    
})
// the fn y here is a callback fn. it is called a callback fn becz
// we give the responsibility of the fn ('y') to another fn ('x'),
// now its upto 'x' when to call the fn 'y'.
// i.e like, the fn will sometimes call later on our code.


// "JavaScript is synchronous single-threaded language"
// i.e it execute only one command at a time in a specific order.

// 