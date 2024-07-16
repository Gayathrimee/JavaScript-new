// var

// declaring a variable

// var a = 10;

// function test(){
//     var a = 10;
// }

//               var

// function test(){
//     console.log(testVar);
//     testVar = 12;
//     var testVar ;
//     console.log(testVar);
// }
// test();  // this will work for var but won't for let


//              let

// function test(){
//     console.log(testVar);
//     let testVar ;
//     testVar = 12;           // cannot access testVar before declaration and cannot declare more than once
// }
// test();


//      Block  - anything inside a curly bracket is called a block

//  block - var

// function test(){
//     if (true) {
//         var a = 100;
//     }
//     console.log(a)
// }
// test()

//  block - let

// function test(){
//     let a = 20;
//     if (true) {
//         let a = 100;
//         console.log(a)
//     }
//     console.log(a)
// }
// test()


//               const
// has all the properties of let + 2 properties:
// 1. it should have a value
// 2. the value cannot be changed

// eg:  will create error
// function test(){
//     const a = 10;
//     a=100;
//      console.log(a)
// }
// test()

//      ,,,,

 function test(){
    const a = [];
    a.push(12)
    console.log(a);
 }
 test()


// 
// 