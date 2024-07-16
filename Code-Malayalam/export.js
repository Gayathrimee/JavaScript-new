// main exports and imports

// import { addAll, findMax } from './export2.js';

// const val = addAll([1,2,3]);
// const max = findMax([22,12,67,4]);
// console.log(val);
// console.log(max);


// import { addAll,
    // findMax,
    // LibraryName as lName
//    } from './export2.js';

// const val = addAll([1,2,3]);
// const max = findMax([22,12,67,4]);
// console.log(val);
// console.log(max);
// console.log(lName)

//  Default Export

// import mySillyName from './export2.js';

// const max = mySillyName([22,12,67,4]);
// console.log(max);


//  Named export and Default export together

// import findMax, { addAll } from "./export2.js"

// import myPrint, {     // default export
//     addAll,
//     findMax         // named exports

// }from './export2.js'
// console.log(myPrint);


//  * import (to export all things)

import * as export2Obj from './export2.js';
console.log(export2Obj);

  const max = export2Obj.findMax([1,4,2]);
  console.log(max);

  
//