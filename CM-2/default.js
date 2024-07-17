// function average(a , b){
//     console.log(a,b);
//     const avg = (a + b) / 2;
//     return avg;
// }

// const avg = average(2,3);
//  console.log(avg); 


//  (or)

// function average(a = 0, b = 0){
//     console.log(a,b);
//     const avg = (a + b) / 2;
//     return avg;
// }

// const avg = average(5);
//  console.log(avg);  

//  (or)

// function average(a = getDefault(), b = 0){
//     console.log(a,b);
//     const avg = (a + b) / 2;
//     return avg;
// }
// function getDefault(){
//     return 100;
// }
// const avg = average(4);
//  console.log(avg);  

//      (or)

function average(a, b = a){  // or b = a + 100 , anything reltated to a can be 
    console.log(a,b);
    const avg = (a + b) / 2;
    return avg;
}
const avg = average(4);
 console.log(avg);  

//  are some default arguments rules 

 //  
//   
