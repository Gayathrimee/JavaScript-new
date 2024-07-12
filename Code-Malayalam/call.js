//   Call by Value and Call by Reference
// function one(){
//     var a = 100;       //declare a variable
//     two(a);            // calling fn two using the variable
//     console.log('one', a);     // print the variable
// }
// function two(a){
//     a = a + 1;        // increment the variable
//     console.log('two', a)    // print the variable
// }
// one()           // call fn one

// if declare an object instead of 'a' ,an integer
// function one(){
//     var a = {
//         value:100
//     };       
//     two(a);            
//     console.log('one', a.value);     // print the variable
// }
// function two(a){
//     a.value = a.value + 1;        // increment the variable
//     console.log('two', a.value)    // print the variable
// }
// one()           // call fn one


// declare an arrow instead of a
// function one(){
//     var a = 100;
//     two(a);            
//     console.log('one', a);     
// }
// function two(a){
//     a  = a  + 1;        
//     console.log('two', a)
// }   
// one()

function one(){
    var a = {
        value:100
    };       
    two(a);            
    console.log('one', a.value);     
}
function two(a){
    a = {
        value:400
    }
    console.log('two', a.value);    
}
one()           


// 