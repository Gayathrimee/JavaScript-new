//  is about " try, catch, finally and throw "
//  they are js features which used to handle the errors in our code

//  console.log('started');

//  const a = getVal1();
//  const b = getVal2();

//  const result =  processValues(a,b);
//  console.log(result);

//  console.log('ended');

// //  =====

// function getVal1(){
//     return 12;
// }

// function getVal2(){
//     return 22;
// }

// function processValues(a,b){
//     return a + b;
// }

//   making error

// console.log('started');

// const a = getVal1();
// const b = getVal2();

// const result =  processValues(a,b);
// console.log(result);

// console.log('ended');

// //  =====

// function getVal1(){
//     console.log('inside getVal1');
//     var obj = undefined;
//     return obj.value;
// }

// function getVal2(){
//    return 22;
// }

// function processValues(a,b){
//    return a + b;
// }
//  here formed an error code. using try to overcome it

//          Try , catch

// console.log('started');

// let a;

//  try {
//     console.log('on try')
//    a = getVal1();

//  } catch(e){
//     console.log('on catch')
//     a = 0;
//  }

// const b = getVal2();

// const result =  processValues(a,b);
// console.log(result);

// console.log('ended');

// //  =====

// function getVal1(){
//     console.log('inside getVal1');
//     var obj = undefined;
//     return obj.value;
// }

// function getVal2(){
//    return 22;
// }

// function processValues(a,b){
//    return a + b;
// }

//  (or)

// console.log('started');

// let a,b, result;

//  try {
//     console.log('on try')
//    a = getVal1();
//    b = getVal2 ();
//    result = processValues(a, b);

//  } catch(e){
//     console.log('on catch')
//     result = 0;
//  }

//  console.log(result);

// console.log('ended');

// //  =====

// function getVal1(){
//     return 12;
// }

// function getVal2(){
//    return 22;
// }

// function processValues(a,b){
//     junk();
//    return a + b;
// }
//  if no error has come the reult value will be the sum (34);
//  if any error occurs the result value will be 0


//          Finally
//  written at the last of try and catch


// console.log('started');

// let a,b, result;

//  try {
//     console.log('on try')
//    a = getVal1();
//    b = getVal2 ();
//    result = processValues(a, b);

//  } catch(e){
//     console.log('on catch');
//     xzjhldkf();
//     result = 0;
//  }finally {
//     console.log('in finally')   // whether there comes any mistakes in catche or not finally will print
//  }


//  console.log(result);

// console.log('ended');

// //  =====

// function getVal1(){
//     return 12;
// }

// function getVal2(){
//    return 22;
// }

// function processValues(a,b){
//     junk();
//    return a + b;
// }
//      try needs a catch or finally


//              Throw  (nammal error adippikyaan, we can give any arguments)

console.log('started');

let a,b, result;

 try {
    console.log('on try')
   a = getVal1();
   b = getVal2 ();
   result = processValues(a, b);

 } catch(e) {                // the argument "e" in catch is the thing we write after 'throw'
    console.log('inside catch', e)
    result = 0
 }


 console.log(result);

console.log('ended');

//  =====

function getVal1(){
    return 12;
}

function getVal2(){
    console.log('inside getVal2')
    throw  new Error('ente swantham errror');
    return 22;
}

function processValues(a,b){
   return a + b;
}







// 
// 











// 








// 