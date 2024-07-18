// Block is also known as Compound Statement
//  A Block is used to combine multiple js statements into one group.
// {
//     var a = 10;
//     console.log(a)
// }
// if(true) true;

// ....

// if you want to write multiple statements, you can only do that by grouping them together:

// if(true){
//     var a = 10;
//     console.log(a)
// };
//  using {} to combine all of the statements into one statement is called a block

//    BLOCK SCOPE
// what all variable & functions we can access inside the block
// let us declare 3 types of variable to see how they behave inside the block
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// here a is declared in global scope; and b nd c are declared in a 
// seperate scope called global scope
// also b and c cannot be accessed from outside 
// but a can since it is in global scope

// ....

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// .... SHADOWING

// var a = 20;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//     console.log(a);
// prints 10 as the value of 10 for both times

// let b = 20;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//     console.log(b);
//  but here prints the number 20 at second time because 

// const c = 20;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//     console.log(c);
//  here also prints the number 20 at second time because 

// some more shadowing

// const c = 100;

// function x(){
//     const c = 30;
//     console.log(c)
// }
// console.log(c)
// here it will print 100

// const c = 100;

// function x(){
//     const c = 30;
//     console.log(window.c);
//     window.c = 20;
// }
// x();
// console.log(c)
// here it prints 20

//              Illegal shadowing

// let a = 20;
// {
//     var a = 20;
// }
// this creates an error that 'a' has already been declared

// var a = 20;
// {
//     let a = 20;
// }
//  this won't create any error

// let a = 20;
// function x(){
//     var a = 20;
// }
//  this won't create any error

// ....

// const a = 20;
// {
//     const a = 100;
//     {

// // (and)
// const a = 20;
// {
//     const a = 100;
//     {
//         const a = 200;
//         console.log(a);
//     }
// }
// //  print 200

// (and)
const a = 20;
{
    const a = 100;
    {
        const a = 200;
    }
}
console.log(a);

//  print 20


// 