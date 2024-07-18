// console.log(b)
// let a = 10;
// console.log(a)
// var b = 100;

// ...

// let a = 10;
// let a = 100;
// shows syntax error that is a has already been declared

// ...

// let a = 10;
// var a = 100;
// shows syntax error that is a has already been declared

// ...

// const is more strict than let : eg.

// let a;
// const b = {};

// a = 10;
// console.log(a)
// // will print 10. can assign value for let anywhere in the prgrm.

// ... but if try to print a value for const later;

// let a;
// const b;

// a = 10;
// b = 100;
// console.log(a);
// console.log(b)
// will show syntax error : missing initialization in const declaration

// ...

let a;
const b = 100;

a = 10;
b = 1008;
console.log(a);
console.log(b)
// this time it gives a typeError not a syntax : assignment to constant varible.