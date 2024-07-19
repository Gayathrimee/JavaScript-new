// function x(){
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     console.log("namaste")
// } 
// x();

// function x(){
//     for (var i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("namaste")
// } 
// x();
//  this will print an output as
// namaste, 6 6 6 6 6

// instead of 'var' if use 'let':
// function x(){
//     for (let i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("namaste")
// } 
// x();
// now it will print 1 2 3 4 5 after namaste.

// using var,
function x(){
    for (var i = 1; i <= 5; i++){
        function close(y){
            setTimeout(function(){
                console.log(y);
            }, 1000 * y);
        }
        close(i);
    }
    console.log("namaste");
}
x();

