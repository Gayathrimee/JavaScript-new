// var x = 7

// function getName() {
//     console.log("Namaste Javascript")
// }
// getName()
// console.log(x)

//  explaining hoisting with eg

// ...
// getName()
// console.log(x)

// var x = 7

// function getName() {
//     console.log("Namaste Javascript")
// }
// this will print namaste js and the x as undefined 


// ...
// getName()
// console.log(x)
// console.log(getName)

// function getName() {
//     console.log("Namaste Javascript")
// }
//  if we print this, this will show that x is not defined.

//  Arrow fn things

// getName()
// console.log(x)

// var x = 7

// var getName2 = () =>{
//     console.log("Namaste Javascript")
// }

// function getName() {
//     console.log("Namaste Javascript")
// }
// getName2()
//  this will print the output namaste js of arrow fn

// ..
// getName2()
// getName()
// console.log(x)

// var x = 7

// var getName2 = () =>{
//     console.log("Namaste Javascript")
// }

// function getName() {
//     console.log("Namaste Javascript")
// }
//  will print error "getName2 is not a fn". i.e since it is an arrow fn,
//  it will act as a variable and it won't logout before it is declared.

// also
//  var getName2 = function() {}
//       -> this will make both the fn getName(), getName2() show undefined in memory allocation

getName2()
getName()
console.log(x)

var x = 7

var getName2 = function() {
}

function getName() {
    console.log("Namaste Javascript")
}

//   