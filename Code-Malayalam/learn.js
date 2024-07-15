// ............call back function.............
// console.log('One');

// const a = [2,3,7,6,4,5];

// a.forEach ( function (arg){    // no need of 'myFunction' {function myFuntion (arg)} since we r not calling it - is called Anonymous fn
//     console.log(arg)
// });
// console.log('Two')

// the same fn can also be written as :
// console.log('One');

// const a = [2,3,7,6,4,5];

// a.forEach (item => console.log(item)); // is called arrow-fn
// console.log('Two')



// .........Arrow Function........

// function myFunction(paramas) {
//     console.log("Hello World",paramas)
// }
// myFunction()
// const values = [1,2,3,4,5,6,7]; 
// values.forEach(myFunction)

//         OR
// const values = [1,2,3,4,5,6,7]; 
// values.forEach(function myFunction(val){
//     console.log("Hello World",val);
// }); 


//  we can write a fn 2 types :
// with name and
// without name - anonymous

// //1. with name:
// const values = [1,2,3,4,5,6,7]; 
// function myFunction(val){
//     console.log("Hello World",val);
// }
// values.forEach(myFunction)            // -> here we r calling the fn

// 2. anonymous:
// const values = [1,2,3,4,5,6,7]; 
// const fn = function (val){
//     console.log("Hello World",val);
// }
// values.forEach(fn)                  //  -> here we calling the fn by variable


// function myFunction(val) {
//     console.log("Hello Me",val);
// }
// const fn = function (val){
//     console.log("hello world gives",val)
// }
// myFunction();
// fn(200);
// anonymous fn cannot be used before declaration
// but normal fn can 


// 
// 
// 