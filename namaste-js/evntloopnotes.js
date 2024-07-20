// Web APIs
// - setTimeout()
// - DOM APIs
// - fetch()
// - local storage
// - console
// - location
// These all are part of Browser,
//  and browser gives us action inside JS 'call stack' or 'JS Engine'

// Global Object : window
// it gives access to whatever we want.
// eg; if we want to set timer in js, the global object gives access to the timeout feature of browser.

// setTimeout()
console.log("start");
setTimeout(function cb(){
    console.log("callback")
}, 5000);
console.log("end");

//1. first read the "start" and print it out
// 2. then set Timer 5000 ms in browser by passing info through web APIS
// 3. execute the next part i.e. prints out "end"
// 4. now, when the timer runs out it goes to "callback queue"
// There is Event Loop who monitor whether the  call stack is empty and 
// whether there is any callback fn in callback queue.
// 5. When the call stack got empty, pushes the callback fn into the stack,
// and there it starts executing.
// give info to api, it give access to console in browser, prints out "callback"

// fetch()
console.log("start");

document.getElementById("btn").addEventListener("click",function cb(){
    console.log("callback")
});
console.log("end");

// 1. prints out start
// 2. reads document : whatever starts with document. is DOM APIs 
// like getElementById, addEventListener

// -> addEventListener:
// when a btn is given if we want add something to it when is clicked, we use addEventListener
// we add and event which is 'click' and add the fn ; what happens when the btn is clicked

//