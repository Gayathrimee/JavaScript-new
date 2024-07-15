// var student1 = {
//     name:'Alen',
//     yob:1990,
//     getAge: function (){
//         return new Date().getFullYear() - this.yob;
//     }
// };

// console.log( student1);

// var student1 = {
//     name:'Alen',
//     yob:1990,
//     getAge: function (){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };

// console.log( student1.getName(), student1.getAge());

// var student1 = {
//     name:'Alen',
//     yob:1990,
//     getAge: function (){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };


// var student2 = {
//     name:'Bob',
//     yob:1992,
//     getAge: function (){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };


// var student3 = {
//     name:'cruise',
//     yob:1994,
//     getAge: function (){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };

// console.log( student1.getName(), student1.getAge());
// console.log( student2.getName(), student2.getAge());
// console.log( student3.getName(), student3.getAge());


//   ------------------- using CLASS ----------------------------

// class Student {
//     name;
//     yob;
//     place;

//     constructor(name, yob){
//         this.name = name;
//         this.yob = yob;
//     }

//     getAge(){
//         return new Date().getFullYear() - this.yob;
//     };
//     getName(){
//         return this.name;
//     };
// }

// var student1 = new Student('Alen',1990);
// var student2 = new Student('Bob', 1999);
// var student3 = new Student('Cruise', 2003);

// console.log(student1);
// console.log(student2);
// console.log(student3);


//      STATIC FUNCTION


// function printMinYob(...args ){
//     var arr = args.map((item => item.yob));
//     console.log(Math.min(...arr))
// }


// class Student {
//     name;
//     yob;
//     place;

//     constructor(name, yob){
//         this.name = name;
//         this.yob = yob;
//     }

//     getAge(){
//         return new Date().getFullYear() - this.yob;
//     };
//     getName(){
//         return this.name;
//     };
// }

// var student1 = new Student('Alen',1990);
// var student2 = new Student('Bob', 1999);
// var student3 = new Student('Cruise', 2003);

// printMinYob(student1,student2,student3);

//               ................................


// class Student {
//     name;
//     yob;
//     constructor(name, yob){
//         this.name = name;
//         this.yob = yob;
//     }

//     getAge(){
//         return new Date().getFullYear() - this.yob;
//     };

//     getName(){
//         return this.name;
//     };

// }
//     Student.printMinYob = function(...args ){
//         var arr = args.map((item => item.yob));
//         console.log(Math.min(...arr))
// }

// var student1 = new Student('Alen',1990);
// var student2 = new Student('Bob', 1999);
// var student3 = new Student('Cruise', 2003);

// Student.printMinYob(student1,student2,student3);

//  this is also ===


class Student {
    name;
    yob;
    constructor(name, yob){
        this.name = name;
        this.yob = yob;
    }

    static printMinYob = function(...args ){
        var arr = args.map((item => item.yob));
        console.log(Math.min(...arr))
}
    getAge(){
        return new Date().getFullYear() - this.yob;
    };

    getName(){
        return this.name;
    };

}

var student1 = new Student('Alen',1990);
var student2 = new Student('Bob', 1999);
var student3 = new Student('Cruise', 2003);

Student.printMinYob(student1,student2,student3);


//,
//  