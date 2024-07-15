// class Button{
//     constructor(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }

//     setWidth(width){
//         this.button.style.width = width + 'px';
//     }
//     setHeight(height){
//         this.button.style.height = height + 'px';
//     }
// }

// var b1 = new Button ('Click Me!')
// b1.setWidth(100);
// b1.setHeight(100)

//  SETTER

// class Button{
//     constructor(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }
 
//     set width(width){               // -> width is the setter
//         this.button.style.width = width + 'px';
//     }
//     set height(height){             // -> height is the setter
//         this.button.style.height = height + 'px';
//     }
// }

// var b1 = new Button ('Click Me!')
// b1.width = 100;
// b1.height = 100;
// console.log(b1);

// we can write like this (the last para) and it is called setters... and its opposite one is the getter..


//  GETTER

// class Button{
//     constructor(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }
 
//     set width(width){               // -> width is the setter
//         this.button.style.width = width + 'px';
//     }
//     set height(height){             // -> height is the setter
//         this.button.style.height = height + 'px';
//     }
//     get width(){                        //getter
//         return this.button.style.width;
//     }
//     get height(){                       //getter
//         return this.button.style.height;
//     }
// }

// var b1 = new Button ('Click Me!')
// b1.width = 100;
// b1.height = 100;
// console.log(b1.width,b1.height);

//                  ..............................

// class Button{
//     constructor(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }
 
//     set width(width){               // -> width is the setter
//         this.button.style.width = width + 'px';
//     }
//     set height(height){             // -> height is the setter
//         this.button.style.height = height + 'px';
//     }
//     get width(){                        //getter
//         return parseInt(this.button.style.width,10);
//     }
//     get height(){                       //getter
//         return parseInt(this.button.style.height,20);
//     }
// }

// var b1 = new Button ('Click Me!')
// b1.width = 100;
// b1.height = 100;
// console.log(b1.width,b1.height);

//                  ..............................

var b1 = {
init (name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button)
    },
 
    set width(width){               // -> width is the setter
        this.button.style.width = width + 'px';
    },
    set height(height){             // -> height is the setter
        this.button.style.height = height + 'px';
    },
    get width(){                        //getter
        return parseInt(this.button.style.width,10);
    },
    get height(){                       //getter
        return parseInt(this.button.style.height,10);
    },
}

b1.init('click');
b1.width = 100
b1.height = 100


// 


















// 