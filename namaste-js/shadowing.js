// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// here the a will be printed as 10. This is called shadowing.
// The a inside the block shadows a outside the block

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// Here we will get a 10 again as value of a in last log out.
// i.e. the variable inside the block shadowed a of outside 
// and also modified the value of a.
// this is because a is in 'var' and it is in global space.

// in the case of 'let':
// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);
// it prints 100 for 2nd b. It's because 'b' and 'c' is stored in 
// one block scope and the b outside the  block is stored in different scope, script
// so when logged out it will 1st use the block scope as local memory and the script

// in the case of 'const' :
// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c);
// same as 'let'

//  the shadowing behaves in similar way in a fn also:
// const c = 100;
// function x(){
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c)
//  logs out 30 1st and then 100.

//  Illegal shadowing:
// let a = 20;
// {
//     var a = 20;
//     console.log(a)
// }
// here it will shows that a is already declared. 
// but we can use var 1st and then let.
// i.e we can't shadow a 'let' using 'var' but we can shadow a 'var' using 'let'

// but we can make it up using a fn:

// let a = 20;
// function x(){
//     var a = 10;
//         //console.log(a)
// }
//         //x();
//         //console.log(a)
// this won't make any error bcz var is in a boundary now, is in fn scope.

// eg with lexical scope
const a = 20;
{
    const a = 10;
    {
        const a = 1;
        console.log(a)
    }
    console.log(a)
}
console.log(a)
//  here it logs out in the order of 1,10,20.

// 