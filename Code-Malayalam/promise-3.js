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
console.log(' === Requesting 1')
getJson("https://jsonplaceholder.typicodefdsfsf.com/todos/1")

    .then ((data) => {
        console.log(data);
        console.log(' === Requesting 2');
        return getJson ("https://jsonplaceholder.typicode.com/todos/2");  
    })
    .catch ((err) => {
        console.log('ERROR:',err)
    })

    .then((data) =>{
        console.log(data);
        console.log(' === Requesting 3');
        return getJson ("https://jsonplaceholder.typicode.com/todos/3");  
    })
    .then((data) => {
        console.log(data);
    });



















//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// 