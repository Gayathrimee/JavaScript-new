var a = 10;
function b(){
    var x = 10;
}
console.log(window.a)
console.log(a)
console.log(this.a)

// 3 of them will provide the same output since all represents the same
//  but if we do cinsile.log(x) creates an error saying that x is not defined
// its because x is inside a fn. it is not defined in the global space.
// Anything inside a fn is not there in the global space and cannot access directly

console.log(x)

// 