// document.getElementById("clickMe")
// .addEventListener("click",function xyz(){
//     console.log("Button Clicked")
// })
// shows button clicked again nd again

// let count = 0;
// document.getElementById("clickMe")
// .addEventListener("click",function xyz(){
//     console.log("Button Clicked", ++count)
// })
// shows button clicked 1, button clicked 2 , ... as much as we click the code

function attachEventListeners(){
    let count = 0;
document.getElementById("clickMe")
.addEventListener("click",function xyz(){
    console.log("Button Clicked", ++count)
});
}
attachEventListeners()

// Event Listeners are heavy, means it takes memory.
// Whenever we attach an eventlistener its kind of formed of closure.