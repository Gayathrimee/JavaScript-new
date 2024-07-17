//   MUTATION

//1.  in the case of nonprimitives
//  eg : Object

// var a = {
//     name:'code malayalam'
// }
// var b=a;

// b.name = 'code';

// console.log('a =', a);
// console.log('b =', b);

// 2. in the case of non-primitive objects

// var a = 10
// var b = a;
// b = b + 1;

// console.log('a =', a);
// console.log('b =',b);

// immutable =/ const

// const a = { name : "code malayalam"};;
// a.test = "name";
// console.log(a)

//  const : reference cannot be changed
//  immutable : value cannot be changed

//  ....................

//   immutation disadvantages

// function junk(obj){
//     obj.test = "Test";
//     return obj;
// }
// const myObj = {
//     name: 'code malayalam'
// };
// var ret = junk(myObj);

// console.log(ret === myObj)

//  here the object shows true (given ===) even the 2 fns are different,
// given they are equal, since they are immutable, their refernce won't change even the values are changed
// if new object is created inside the object, reference will change and
//  will show false statement

// :
function junk(obj){
    const ret = {
        ...obj,                 // spread operator
        test:"Test"
    }
    return ret;
}
const myObj = {
    name: 'code malayalam'
};
var ret = junk(myObj);
console.log(myObj);
console.log(ret);
console.log(ret === myObj)
//  this will show false

// 