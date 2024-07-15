// console.log('Requesting 1')
// const pr = myFetch ("https://jsonplaceholder.typicode.com/todos/1");

// pr.then ((data) => {
//     console.log(data);

//     console.log('Requesting 2')
//     const pr = myFetch ("https://jsonplaceholder.typicode.com/todos/2");

//     pr.then((data) => {
//         console.log(data);

//     console.log('Requesting 3')
//     const pr = myFetch ("https://jsonplaceholder.typicode.com/todos/3");

//     pr.then((data) => {
//         console.log(data);
//       });
//     });  
// });








// ..........Chaining............

// console.log('Requesting 1')
// const pr = myFetch ("https://jsonplaceholder.typicode.com/todos/1");

// const pr2 = pr.then ((data) => {
//     console.log(data);
//     console.log('Requesting 2');
//     return myFetch ("https://jsonplaceholder.typicode.com/todos/2");  
// });

// const pr3 = pr2.then((data) =>{
//     console.log(data);
//     console.log('Requesting 3');
//     return myFetch ("https://jsonplaceholder.typicode.com/todos/3");  
// });

// pr3.then((data) => {
//     console.log(data);
// });


//  (or)          kinda some more clean code

// console.log('Requesting 1')
// myFetch ("https://jsonplaceholder.typicode.com/todos/1")

//     .then ((data) => {
//         console.log(data);
//         console.log('Requesting 2');
//         return myFetch ("https://jsonplaceholder.typicode.com/todos/2");  
//     })
//     .then((data) =>{
//         console.log(data);
//         console.log('Requesting 3');
//         return myFetch ("https://jsonplaceholder.typicode.com/todos/3");  
//     })
//     .then((data) => {
//         console.log(data);
//     });


    //   some fetch things

// console.log('Requesting 1')
// fetch ("https://jsonplaceholder.typicode.com/todos/1")

//      .then ((data) => {
//         return data.json();
//     })
//     .then ((data) => {
//         console.log(data)
//     })


//       json things

console.log('Requesting 1')
getJson("https://jsonplaceholder.typicode.com/todos/1")

     .then ((data) => {
        console.log(data);
    });







    // 