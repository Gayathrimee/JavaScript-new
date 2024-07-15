// var button = document.getElementById('mybutton');
// button.onclick = () =>{
//     console.log("hello")
// }



//   Asynchronous Callback

// var button = document.getElementById('mybutton');
// button.onclick = () => {
//     console.log("started click event");

//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/1",
//         success:(data) => {
//             console.log(data)
//         }
//     });

//     console.log("ended click event")
// }

//       Asynch

// var button = document.getElementById('mybutton');
// button.onclick = () => {
//     console.log("started click event");

//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/1",
//         success:(data) => {
//             console.log(data)
//         },
//         async:false
//     });

//     console.log("ended click event")
// }

//         Array          : Synchronous


// var button = document.getElementById('mybutton');
// button.onclick = () => {
//     console.log("started click event");

//     var arr = [1,22,3,5,9];
//     arr.forEach((item) => {
//         console.log(item);
//     });

//     console.log("ended click event")
// }


// //  1.                                .......................................


// var button = document.getElementById('mybutton');
// button.onclick = () => {
//     console.log("started click event");
//     var arr = [];

//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/1",
//         success:(data) => {
//             console.log('ajax1 started');
//             arr.push(data.title);
//             console.log("ajax1 ended");
//         },
//         async:true
//     });

//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/2",
//         success:(data) => {
//             console.log('ajax2 started');
//             arr.push(data.title);
//             console.log("ajax2 ended");
//         },
//         async:true
//     });

//     document.getElementById('mytext').value = arr.join('\n');
//     console.log("ended click event")
// }

// //   2.                               .......................................


// var button = document.getElementById('mybutton');
// button.onclick = () => {
//     console.log("started click event");
//     var arr = [];

//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/1",
//         success:(data) => {
//             console.log('ajax1 started');
//             arr.push(data.title);

//             $.ajax({
//                 url:"https://jsonplaceholder.typicode.com/todos/2",
//                 success:(data) => {
//                     console.log('ajax2 started');
//                     arr.push(data.title);
//                     console.log("ajax2 ended");

//                     document.getElementById('mytext').value = arr.join('\n');

//         },
//         async:false
//     });
//     console.log("ajax1 ended");
   
//         },
//         async:false
//     });

//     console.log("ended click event")
// }


//                                .......................................

var button = document.getElementById('mybutton');
button.onclick = () => {
    console.log("started click event");

    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/1",
        success:(data) => {
            console.log(data)
        },
        async:false
    });

    console.log("ended click event")
}





//
//  