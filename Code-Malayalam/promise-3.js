//          -------ERROR-----

// console.log(' === Requesting 1')
// getJson("https://jsonplaceholder.typicodefdsfsf.com/todos/1")

//     .then ((data) => {
//         console.log(data);
//         console.log(' === Requesting 2');
//         return getJson ("https://jsonplaceholder.typicode.com/todos/2");  
//     },
//     (err )=> {
//         console.log('ERROR:',err);
//     })
//     .then((data) =>{
//         console.log(data);
//         console.log(' === Requesting 3');
//         return getJson ("https://jsonplaceholder.typicode.com/todos/3");  
//     })
//     .then((data) => {
//         console.log(data);
//     });

//        catch

// console.log(' === Requesting 1')
// getJson("https://jsonplaceholder.typicodefdsfsf.com/todos/1")

//     .then ((data) => {
//         console.log(data);
//         console.log(' === Requesting 2');
//         return getJson ("https://jsonplaceholder.typicode.com/todos/2");  
//     })
//     .catch ((err) => {
//         console.log('ERROR:',err)
//     })

//     .then((data) =>{
//         console.log(data);
//         console.log(' === Requesting 3');
//         return getJson ("https://jsonplaceholder.typicode.com/todos/3");  
//     })
//     .then((data) => {
//         console.log(data);
//     });


//           Util Function : promise.resolve, reject, all

// getJson("https://jsonplaceholder.typicode.com/todos/1")

//     .then ((data) => {
//         console.log(data);
//     })


//  promise.reject

// getJson("https://jsonplaceholder.typicode.com/todos/1")

//     .then ((data) => {
//         console.log(data);
//     })
//     .catch((data) =>{
//         console.log(data)
//     })

//      Promise.all

    // Promise.all([
    //     getJson("https://jsonplaceholder.typicode.com/todos/1"),
    //     getJson("https://jsonplaceholder.typicode.com/todos/2"),
    //     getJson("https://jsonplaceholder.typicode.com/todos/3")

    // ])

    // .then ((data) => {
    //     console.log(data);
    // });


//      Promise.race

Promise.race([
    getJson("https://jsonplaceholder.typicode.com/todos/1"),
    getJson("https://jsonplaceholder.typicode.com/todos/2"),
    getJson("https://jsonplaceholder.typicode.com/todos/3")

])

.then ((data) => {
    console.log(data);
});


// 
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// 