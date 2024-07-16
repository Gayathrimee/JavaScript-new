// import { createButton } from "./widget.js";

// createButton('Feature 1', () => {
// console.log('clicked Feature 1)
// });
// createButton('Feature 2', () => {
//     // console.log('clicked Feature 2')
//     createButton ('Start Disco');
//     createButton ('Start Disco');

// });

//          Disco Disco

// import { createButton } from "./widget.js";

// createButton('Feature 1', () => {
//     alert ('feature 1');
// });
// createButton('Feature 2', () => {
//     createButton ('Start Disco',ChangeBg);
//     createButton ('Stop Disco', stopChangingBg);
// });

// let isGreen = true;
// let handle = null;
// function ChangeBg (){
//    handle = setInterval(() => {
//     document.body.style.background = isGreen ? 'green' : 'blue';    
//     isGreen = ! isGreen;
//     }, 500);
// }

// function stopChangingBg(){
//     if (handle) {
//         clearInterval(handle);
//         handle = null;
//         document.body.style.background = 'none';    
//     }
// }

//       created feature 2

// import { createButton } from "./widget.js";
// import { ChangeBg, stopChangingBg } from "./feature2.js";

// createButton('Feature 1', () => {
//     alert ('feature 1');
// });
// createButton('Feature 2', () => {
//     createButton ('Start Disco',ChangeBg);
//     createButton ('Stop Disco', stopChangingBg);
// });

//           Dynamic Import 

// import { createButton } from "./widget.js";

// createButton('Feature 1', () => {
//     alert ('feature 1');
// });
// createButton('Feature 2', () => {
//     import ('./feature2.js')
//     .then( (obj) => {
//         createButton ('Start Disco',obj.ChangeBg);
//         createButton ('Stop Disco', obj.stopChangingBg);
//     });
// });

// (or) using await

import { createButton } from "./widget.js";

createButton('Feature 1', () => {
    alert ('feature 1');
});
createButton('Feature 2', async() => {
        const obj = await import ('./feature2.js')
        createButton ('Start Disco',obj.ChangeBg);
        createButton ('Stop Disco', obj.stopChangingBg);
    });


// 
//  