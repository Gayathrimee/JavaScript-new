// ..................Call-Back........

// ....non call-back fn..........

// function  myFunction(arg){
//     console.log(arg)
// }
// myFunction(10)

// ...call-back fn....

// console.log('One');
// document.getElementById('button').onclick = myFunction;

// function  myFunction(arg){
//     console.log(arg)
// }

// console.log('Two')

// .....forEach callback fn......

// console.log('One');

// const a = [2,3,7,6,4,5];

// function  myFunction(arg){
//     console.log(arg)
// }

// a.forEach(myFunction)
// console.log('Two')

//           (or)

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

// const values = [1,2,3,4,5,6,7]; 
// values.forEach(function myFunction(val){
//     console.log("Hello World",val);
// }); 
