//  Scoping :
// 1: Local Scoping
// 2: Global Scoping

//  1. Local Scoping

// function fn1(){
//     var number = 12;
//     console.log(number)
// }
// function fn2(){
//     console.log(number)
// }

// fn1();
// fn2()       // the number won't print for the fn2 since the number is declared inside a fn

// 2: Global Scoping

// var number = 25;

// function fn1(){
//     console.log(number);
// }

// function fn2(){
//     console.log(number)
// }

// fn1();
// fn2()


//  Creating a green button : Global scoping

// var button = document.getElementById('hello');
// button.style.background = 'green' ;
// button.onclick = () => {
//     console.log(button.innerHTML);
// }

//  Creating a green button : local scoping

// function main(){
//     var button = document.getElementById('hello');
//     button.style.background = 'green' ;
//     button.onclick = () => {
//         console.log(button.innerHTML);
//     }
// }
// main()


//      Self-invoking fn

(function () {
    var button = document.getElementById('hello');
    button.style.background = 'green' ;
    button.onclick = () => {
        console.log(button.innerHTML);
    }
})()