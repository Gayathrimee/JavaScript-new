//          Async and Await

// async is written when a fn is declared
//  await is written when a fn is called

//      Asyc

//  is a normal fn

//  function getValue(){
//     return 12;
// }
// const result = getValue();
// console.log(result)

//  to make a fn async, add async into the fn -> comes not the value, but the fn

//  an async fn

// async function getValue(){
//     return 12;
// }
// const result = getValue();
// console.log(result)


//  to get data from promise, resolve it

// async function getValue(){
//     return 12;
// }
// const result = getValue();
// result.then((data) => {
//     console.log(data);

// })

//  if a promise has to be returned, fetch cheythal return verunnath promise aayrkm

// async function getValue(){
//     return fetch("https://jsonplaceholder.typicode.com/todos/1");
// }
// const result = getValue();
// result.then((data) => {
//     console.log(data);

// })

//  there is a util fn in promise:

// async function getValue(){
//     return Promise.resolve(12);
// }
// const result = getValue();
// result.then((data) => {
//     console.log(data);

// })

//  the use of async fn is not to convert data into promise; 
// it is mainly used to or it helps to write the keyword "Await".


//          AWAIT

// console.log('started');
// getValue();
// console.log('Ended');

// async function getValue(){

//     // function getValue(){
// //     fetch ("https://jsonplaceholder.typicode.com/todos/1")
// //     .then((data) =>{
// //         console.log(data)
// //     })
// // }        // (instead these lines we can write like this:)

// const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(data);
// return data;
// }

//:  to get the data

// console.log('started');
// getValue();
// console.log('Ended');

// async function getValue(){

//     // fetch ("https://jsonplaceholder.typicode.com/todos/1")
//     // .then((data) => {
//     //     return data.json();
//     // })
//     // .then((data) =>{
//     //     console.log(data)
//     // })      //(instead these lines we can write like this:)

// const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const jsonData = await data.json();
// console.log(jsonData);
// return jsonData;

// }

// console.log('started');
// var aa = getValue();
// aa.then((data) => {
//     console.log(data)
// });
// console.log('Ended');

// async function getValue(){

//     // fetch ("https://jsonplaceholder.typicode.com/todos/1")
//     // .then((data) => {
//     //     return data.json();
//     // })
//     // .then((data) =>{
//     //     console.log(data)
//     // })      //(instead these lines we can write like this:)

// const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const jsonData = await data.json();
// // console.log(jsonData);
// return jsonData;

// }

//  ..........how to handle error................

// console.log('started');
// var aa = getValue()
//  .then((data) => {
//     console.log(data)
// })
//     .catch(()=> {
//         console.log('handled');
//     });

// console.log('Ended');

// async function getValue(){

//         const data = await fetch("https://jsonplaceholder.typicodesadsad.com/todos/1");  // error  is in the link
//         const jsonData = await data.json();
//         return jsonData;

// }

//  (or) to clear it inside the funtn itself;

console.log('started');
var aa = getValue()
 .then((data) => {
    console.log(data)
})

console.log('Ended');

async function getValue(){

    try{
        const data = await fetch("https://jsonplaceholder.typicodesadsad.com/todos/1");  // error  is in the link
        const jsonData = await data.json();
        return jsonData;
    } catch(e){
        console.log('handled');
        return{}
    }

}

//  