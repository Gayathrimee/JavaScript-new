console.log("start");

setTimeout( function cb() {
    console.log("callback")
}, 5000);

console.log("end")

// //          FETCH

console.log("start");

setTimeout( function cbT() {
    console.log("CB SetTimeout")
}, 5000);
fetch ("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix");
});

console.log("end");

// // trust issues of setTimeout()
console.log("start");

setTimeout( function cb() {
    console.log("call")
}, 1000);

console.log("end")

// // million codes

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log("while expires");

// ...
console.log("start");

 function cb() {
    console.log("call")
}
setTimeout(cb,0)

console.log("end")

