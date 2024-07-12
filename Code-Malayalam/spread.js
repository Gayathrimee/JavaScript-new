//        Spread Operators

// 1. Objects

// var obj={
//     a:1,
//     b:2,
//     c:'Hello'
// }
// var obj2 = {
//     ...obj
// }
// console.log(obj)
// console.log(obj2)

//                  .......................

// 2. array

// var a = [1,2,3,4];
// var b = [...a];

// console.log(a);
// console.log(b);

//                   .........................

// var obj = {
//     a:1,
//     b:2,
//     c:'Hello'
// }
// var obj2 = obj;

// console.log(obj === obj2)  // this shows true since obj2 = obj

//...... shallow cloning
// var obj = {
//     a:1,
//     b:2,
//     c:'Hello'
// }
// var obj2 = {
//     ...obj
// };

// console.log(obj === obj2)   // shows false cuz ...obj is a new object
 
//  object cloning
// var objA = {
//     a:1,
//     b:2,
//     c:'Hello'
// }
 
// var objB = {
//     a1:1,
//     b1:2,
//     c:'Hello 2'
// }
// var obj2 = {
//     ...objA,
//     ...objB,
//     z:"play"
// };

// console.log(obj2)   

// Array cloning
// var a = [1,2,3,4,5];
// var b = [6,7,8,9,10];

// var c = [...a, ...b]
// console.log(c);

// ....

// var a = [1,2,3,4,5];
// var b = a;

// console.log(b===a);  // is a true statement

// var a = [1,2,3,4,5];
// var b = [...a];

// console.log(b===a);  // is a flase statement cuz b= ...a array
//                       here b is a new array cloned from a

//           ...........cloning..........

//:: var obj1 ={
//     a:1,
//     b:2
// }
// var obj2 = obj1;

// console.log(obj1,obj2);        // gives two results cuz obj1=obj2


//::  var obj1 ={
//     a:1,
//     b:2
// }
// var obj2 = obj1;
// obj2.c = 33;

// console.log(obj1,obj2); 


//::  var obj1 ={
//     a:1,
//     b:2
// }
// var obj2 = {...obj1};
// obj2.c = 33;

// console.log(obj1,obj2);


//:: var obj1 ={
//     a:1,
//     b:2,
//     c: {
//         name:'raman',    // adding object
//         age:45
//     }
// }
// var obj2 = {...obj1};
// obj1.d = 44;
// console.log(obj1,obj2);


//::  var obj1 ={
//     a:1,
//     b:2,
//     c: {
//         name:'raman',   
//         age:45
//     }
// }
// var obj2 = {...obj1};
// obj1.c.name= 'krish';           
// obj1.d = 44;
// console.log(obj1,obj2);
 // the name will change to both of them cuz its shallow cloning. means it copies key values(a,b,c,..) only

//  another advantage of sprd operator is it can give arguments :

//:: var a = Math.max(1,2,33,49,15,6);
// console.log(a);                      // shows the max-value from it

var arr = [1,2,33,49,15,6];
var a = Math.max(...arr);
console.log(a);


