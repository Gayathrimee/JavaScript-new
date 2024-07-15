// console.log('started');

// $.ajax({
//     type:'GET',
//     url:"https://jsonplaceholder.typicode.com/todos/1",
//     success : (msg) => {
//         console.log(msg);
//     },
//     error: (xhr, statusText) => {
//         console.log(statusText) ;
//     },
// });

// console.log('ended')


//        same fn using PROMISE (pr)

// console.log('started');

// var pr = myFetch("https://jsonplaceholder.typicode.com/todos/1");

// pr.then((data) => {
//     console.log(data);
// });
// console.log('ended')

//           .................

// console.log('started');

// var pr = myFetch("https://jsonplaceholder.typicode.com/todos/1");

// function buttonClick(){
//     console.log('clicked')
//     pr.then((data) => {
//         console.log(data);
//     });
// }
// console.log('ended')

//         ____Error___  

console.log('started');

var pr = myFetch("https://jsonplaceholder.typicode.com/todos/1");

function buttonClick(){
    console.log('clicked')
    pr.then((data) => {
        console.log(data);
    }, (err) =>{
        console.log(err);
    });
}
console.log('ended')



// 
//