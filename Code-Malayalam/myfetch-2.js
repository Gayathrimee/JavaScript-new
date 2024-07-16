// function getJson(url) {
//     return fetch (url)
//     .then ((data) => {
//         return data.json();
//     })
// }

//                  Util Fuction

// const cache = {
//     name: 'code malayalam',
// }

// function getJson(url) {

//     if (cache){
//         return cache;
//     }

//     return fetch (url)
//     .then ((data) => {
//         return data.json();
//     })
// } 


//      (or) if cache is empty

// const cache = null;

// function getJson(url) {

//     if (cache){
//         return cache;
//     }

//     return fetch (url)
//     .then ((data) => {
//         return data.json();
//     })
// } 


//           using promise

// const cache = {
//     name: 'code malayalam',
// }

// function getJson(url) {

//     if (cache){
//         return converToPromise(cache);
//     }

//     return fetch (url)
//     .then ((data) => {
//         return data.json();
//     })
// } 

// function converToPromise(data){
//     return new Promise ((res,rej) => {
//         res(data) ;
//     }); 
// }

//  (or)    promise. resolve

// const cache = {
//     name: 'code malayalam',
// }

// function getJson(url) {

//     if (cache){
//         return Promise.resolve(cache);
//     }

//     return fetch (url)
//     .then ((data) => {
//         return data.json();
//     })
// } 

//           promise.reject

// const cache = {
//     name: 'code malayalam',
// }

// function getJson(url) {

//     if (cache){
//         return Promise.reject(cache);
//     }

//     return fetch (url)
//     .then ((data) => {
//         return data.json();
//     })
// } 

//           promise.all


function getJson(url) {

    return fetch (url)
    .then ((data) => {
        return data.json();
    })
} 

//         promise.race

// 
// 