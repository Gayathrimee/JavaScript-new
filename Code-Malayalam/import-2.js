//      Import

// import { addArray } from "./import.js";
// const value = addArray ([1,2,3]);
// console.log(value);

//  importing more than one array

import { addArray } from "./import.js";
import { addArray as concatArray} from "./importA.js";

const value = addArray ([1,2,3]);
const value2 = concatArray ([1,2,3],[4,5,6]);
console.log(value);
console.log(value2);












// 
// 