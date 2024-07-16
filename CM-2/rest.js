//  Rest Paarameters and destructuring
//  is a syntax used to accept the parameters in a fn


//      Rest Parameters

//   Array Destructuring

// function test(){
//     const arr = [11,33,43,22];
//     const [a,b] = arr;

//     console.log(a,b);
// }
// test();

//  ....

// function test(){
//     const arr = [11,33,43,22];
//     const [a,b, c,d,...rest] = arr;

//     console.log(b,rest);
// }
// test();

// // .....

// function test(a,b, ...rem){         // if  no a / b is given every arguments will be array    
//     console.log(a,b,rem)
// }
// test(11,54,22,66,32,78,0.45,7000000000000);

// ..... (sum)

// function test(...total){       
    // const a = total.reduce((sum, current) => sum + current)
//     console.log(a)
// }
// test(11,54,22,66,32,78,0.45,7000000000000);

//  Rest Parameters:

// function test(...total){
//     console.log(total)
//     const a = total.reduce((sum, current) => sum + current)
//     console.log(a);
// }
// const a = [11,54,22,66,32,78,0.45,7000,10,1/0];
// test(...a);



//          Parameter Destructuring

// function test(a) {
//     console.log(a)
// }
// const obj = {
//     name : "code malayalam",
//     age:1
// }
// test(obj)

//      ........ a kind of  destructuring

// function test(a) {
//     const {
//         name,
//         age
//     } = a;
//     console.log(name,age);
// }
// const obj = {
//     name : "code malayalam",
//     age:1
// }
// test(obj)

//  destructing parameters wherever it is written 

function test({name,age}) {
    console.log(name,age);
}
const obj = {
    name : "code malayalam",
    age:1
}
test(obj) 






// 