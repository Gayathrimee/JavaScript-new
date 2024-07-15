//       constructor

// class Button{
//     constructor (name){
//         this.button = document.createElement ('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }

//     onClick(fn){
//         this.button.onclick = fn;
//     }
// }

// var b1 = new Button ('Hello');
// console.log(b1);

// function MyButton(name){
//     this.button = document.createElement ('button');
//     this.button.innerHTML = name;

//     document.body.appendChild(this.button);
// }
// var b2 = new MyButton('yee!')
// console.log(b2);


//   function

// class Button{
//     constructor (name){
//         this.button = document.createElement ('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }

//     onClick(fn){
//         this.button.onclick = fn;
//     }
// }

// var b1 = new Button ('Hello');
// console.log(b1);
// console.log(typeof Button)

// function MyButton(name){
//     this.button = document.createElement ('button');
//     this.button.innerHTML = name;

//     document.body.appendChild(this.button);
// }

// MyButton.prototype.onClick = function (fn) {
//     this.button.onclick = fn ;
// }

// var b2 = new MyButton('yee!')
// b2.onClick(function (){
//     console.log('clicked');
// });
// console.log(b2);
// console.log(typeof MyButton)


//            inheritance

function MyButton(name){
    this.button = document.createElement ('button');
    this.button.innerHTML = name;

    document.body.appendChild(this.button);
}

MyButton.prototype.onClick = function (fn) {
    this.button.onclick = fn ;
}

function MyGreenButton(name) {
    MyButton.call(this,name);
}
MyGreenButton.prototype = Object.create(MyButton.prototype);
MyGreenButton.prototype.onClick = function (fn) {
    MyButton.prototype.onClick.call(this, () => {
        this.button.style.background = "green" ;
        fn();
    });
}


MyGreenButton.prototype.printme = () => {
    console.log("hello");
}

var b2 = new MyGreenButton('yee!')
b2.onClick (function (){
    console.log('clicked');
});

console.dir(MyGreenButton)
console.dir(b2);
b2.printme();



// 
//  