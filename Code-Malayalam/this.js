// const myObj = {
//     a:1,
//     b:1
// };
// console.log(myObj)

//              ...........................

//  use of this:
// let vlaue be a fn,

// const myObj = {
//     a:1,
//     b:1,
//     c:function(){
//         console.log ('hello')
//     }
// };
// console.log(myObj)
// myObj.c()

// if this is used instead of hello
// const myObj = {
//     a:1,
//     b:1,
//     c:function(){
//         console.log (this)
//     }
// };
// console.log(myObj)
// myObj.c()    // same as when myObj is printed

// if we print a 'this' from a fn inside an object it will print the object itself

//  another eg:

// const myObj = {
//     a:1,
//     b:1,
//     c:function(){
//         console.log (this)
//     }
// };

// var aa = myObj.c;
// aa();
// here it prints the window i.e the window of the whole js
//  in js this is the context of who calls it  (when a fn is called and there is a dot object prefix to it then the object is it's context)
// eg:  
// var aa = myobj.c;
//  myobj.c()          c is the fn and myobj is its context


// const myObj = {
//     a:1,
//     b:1,
//     c:function(){
//         console.log (this)
//     }
// };

// var aa = myObj.c;
// myObj.c();           // this will print the object

//              ...........................

// arrw fn's context depends on where it is written

// const myObj = {
//     a:1,
//     b:1,
//     c:() => {
//         console.log (this)
//     }
// };

// var aa = myObj.c;   
// aa();

// the contextnof a fn is the context of a parent fn. since here is no parent fn, window is the context. 
//  arrw fn doesnt depends how we call it. it always depends on its context , i.e its parent fn's context:
// const myObj = {
//     a:1,
//     b:1,
//     c:() => {
//         console.log (this)
//     }
// };

// myObj.c();  

//              ...........................

// we have to call fn c using aa and 'this' should print myObj, then ,
//  every fn has an innerfn called 'call'

// const myObj = {
//     a:1,
//     b:1,
//     c: function(){
//         console.log (this)
//     }
// };

// const yourObj = {
//     k:12,
//     k:22
// };

// var aa = myObj.c;   
// aa.call(myObj);         // -> innerfn : call 

// can use yourObject instead of myObject then the context become yourObject
// const myObj = {
//     a:1,
//     b:1,
//     c: function(){
//         console.log (this)
//     }
// };

// const yourObj = {
//     k:12,
//     l:22
// };

// var aa = myObj.c;   
// aa.call(yourObj);   

//              ...........................

// to set context just when we write , i.e before calling the context ,
//  the context won't change whoever is called
// for that we "bind"  the object , i.e 
// create a new fn of object which has the context of the object itself.

// const myObj = {
//     a:1,
//     b:1,
//     c: function(){
//         console.log (this)
//     }
// };

// myObj.c = myObj.c.bind(myObj);

// var k = myObj.c;
// k();

//              ...........................

// call, bind, apply
// apply is same as call. 

// const myObj = {
//     a:1,
//     b:1,
//     c: function(a,b){
//         console.log (this, a, b)
//     }
// };

// var k = myObj.c;
// k.call(myObj,1,2);

// apply:
// const myObj = {
//     a:1,
//     b:1,
//     c: function(a,b){
//         console.log (this, a, b)
//     }
// };

// var k = myObj.c;
// k.apply(myObj, [1,2]);          // 2nd argument is array

//                  ...............................................


// in arrw fn

// class MyClass {
//     myFunction(){
//         console.log(this);
//     }
// }
// var obj = new MyClass();
// var a = obj.myFunction.bind(obj);
// a(obj);

class MyClass {
    myFunction = () => {
        console.log(this);
    }
}
const myc = new MyClass();
myc.myFunction()
const k = myc.myFunction;
k()



// 
// 