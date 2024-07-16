// main exports and imports

// const name = "My Array Library";

// export const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

// export function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

// export function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// (or)

// const name = "My Array Library";

//  const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

//  function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

//  function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// export{
//     name, 
//     options, 
//     addAll, 
//     findMax
// };

// const name = "My Array Library";

//  const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

//  function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

//  function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// export{
//     name as LibraryName, 
//     options, 
//     addAll, 
//     findMax
// };

//  Default Export

// const name = "My Array Library";

//  const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

//  function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

// export default function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// export{
//     name as LibraryName, 
//     options, 
//     addAll, 
//     findMax
// };

//      (or)

// const name = "My Array Library";

//  const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

//  function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

// function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// export default findMax;

// export{
//     name as LibraryName, 
//     options, 
//     addAll, 
//     findMax
// };

//  Named export and Default export together

// const name = "My Array Library";

//  const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

//  function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

// function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// export default () => {
//     console.log('hello')
// };

// export{
//     name as LibraryName, 
//     options, 
//     addAll, 
//     findMax
// };

//  importing and exporting

// import { test1 } from "./export3.js";  

// const name = "My Array Library";

//  const options = {
//     version: "1.1",
//     author: "Code Malayalam"
// }

//  function addAll (arr = []){
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

// function findMax (arr = []){
//     log('findMax');
//     return  Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

// export default () => {
//     console.log('hello')
// };

// export{
//     name as LibraryName, 
//     options, 
//     addAll, 
//     findMax,
//     test1
// };

//  (or)

import { test1 } from "./export3.js";  

const name = "My Array Library";

 const options = {
    version: "1.1",
    author: "Code Malayalam"
}

 function addAll (arr = []){
    log('addAll');
    return arr.reduce((total,item) => total + item, 0)
}

function findMax (arr = []){
    log('findMax');
    return  Math.max(...arr);
}

function log(val){
    console.log('INSIDE', val)
}

export default () => {
    console.log('hello')
};

export{
    name as LibraryName, 
    options, 
    addAll, 
    findMax,
};

export { test1} from './export3.js';

// 