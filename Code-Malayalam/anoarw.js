// .............difference bw anonymous fn and arrow fn is about context......

// declaring an object:

// const obj = {
//     a: 100,
//     b: 200,
//     myFun : function(){
//         return a + b;
//     }
// }
// console.log (obj.myFun())  // objects are accessed by dot operate

//                       ................

//  this wont work since they are not declared
//  to access variables from inside the object is "THIS"
// watch how:

// const obj = {
//     a: 100,
//     b: 200,
//     myFun : function(){
//         return this.a + this.b;
//     }
// }
// console.log (obj.myFun())  

//                       ................

//  but if arrw fn is declared instead of "function" then it shows NaN. watch:

const obj = {
    a: 100,
    b: 200,
    myFun :() => {
        return this.a + this.b;
    }
}
console.log (obj.myFun())

//                       ................

// 