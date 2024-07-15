// class Button {
//     constructor (name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }
//     onclick(fn) {
//         this.button.onclick = fn;
//     }
// }

// var b1 = new Button ('My Button');
// b1.onclick(function(){
//     console.log('clicked')
// });


//   ____creating a Green Button______

// class Button {
//     constructor (name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }
//     onclick(fn) {
//         this.button.onclick = fn;
//     }
// }


// class GreenButton {
//     constructor (name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }
//     onclick(fn) {
//         this.button.onclick = function(){
//             this.button.style.background = "green";
//         }.bind(this)
//     }
// }

// var b1 = new GreenButton ('G - Button');
// b1.onclick(function(){
//     console.log('clicked')
// });



//        ................INHERITANCE........................

// class Button {
//     constructor (name){
//         console.log('constructor')
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }
//     onclick(fn) {
//         this.button.onclick = fn;
//     }
// }


// class GreenButton extends Button{ 

//     onclick(fn) {
//         this.button.onclick = function(){
//             this.button.style.background = "green";
//         }.bind(this)
//     }
// }

// var b1 = new GreenButton ('G - Button');
// b1.onclick(function(){
//     console.log('clicked')
// });


//   "SUPER" syntax

class Button {
    constructor (name){
        console.log('constructor')
        this.button = document.createElement('button');
        this.button.innerHTML = name;

        document.body.appendChild(this.button);
    }
    onclick(fn) {
        this.button.onclick = fn;
    }
}


class GreenButton extends Button{ 

    constructor(name){
        super(name);
    }

    onclick(fn) {
        super.onclick (function() {
                this.button.style.background = "green";
                fn();
            }.bind(this));
    }
    printme(){
        console.log('me');
    }
}

var b1 = new GreenButton ('G - Button');
b1.onclick(function(){
    console.log('clicked')
});

b1.printme();








 











// 