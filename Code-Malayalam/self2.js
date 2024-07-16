//  Creating a red button : Global Scoping

// var button = document.getElementById('bye');
// button.style.background = 'red' ;
// button.onclick = () => {
//     console.log(button.innerHTML);
// }

//  Creating a red button : local Scoping

// function main2(){
//     var button = document.getElementById('bye');
//     button.style.background = 'red' ;
//     button.onclick = () => {
//         console.log(button.innerHTML);
//     }
// }
// main2()

//      Self-invoking fn

(function () {
    var button = document.getElementById('bye');
    button.style.background = 'red' ;
    button.onclick = () => {
        console.log(button.innerHTML);
    }
})();

//  another eg of self-invoking fn

(function (a, b) {
    console.log(a, b)
})(15, 20);


//  
// 