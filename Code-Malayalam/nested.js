// destructive

// var obj = {
//     name: 'Alice',
//     mark : 35,
//     place: 'Kannur'
// }
// var {
//     name,
//     place
// } = obj;

// console.log(name,place)


// nested destructive

//   object
// var obj = {
//     name: 'Alice',
//     mark : 35,
//     place: 'Kannur',
//     subject: {
//         teacher: 'Bob'
//     }
// }
// var {
//     subject: {
//         teacher
//     }
// } = obj;

// console.log(teacher)

//  for array

// var obj = {
//     name: 'Alice',
//     mark : 35,
//     place: 'Kannur',
//     subject: {
//         teacher: 'Bob'
//     }
// }
// var arr = [11,22,33];
// var [val1, val2] = arr;

// console.log(val2)


//  array containing object'

// var obj = {
//     name: 'Alice',
//     mark : 35,
//     place: 'Kannur',
//     subject: {
//         teacher: 'Bob'
//     }
// }
// var arr = [
//     {
//         name: 'Alice',
//         mark : 35,
//         place: 'Kannur',
//     }
//     , 22,33];
// var [val1, val2] = arr;

// console.log(val1)


// //    ...........

// var obj = {
//     name: 'Alice',
//     mark : 35,
//     place: 'Kannur',
//     subject: {
//         teacher: 'Bob'
//     }
// }
// var arr = [
//     {
//         name: 'Alice',
//         mark : 35,
//         place: 'Kannur',
//     }
//     , 22,33];

// var [{
//     name
// }]=arr
// console.log(name);

//    ...........

var obj = {
    name: 'Alice',
    mark : 35,
    place: 'Kannur',
    subject: {
        teacher: 'Bob'
    }
}
var arr = [
    {
        name: 'Alice',
        mark : 35,
        place: 'Kannur',
        subject: {
            teacher: 'Bob'
        }
    }
    , 22,33];
var [{
    subject: {
        teacher
    }
}] = arr;

console.log( teacher);


// 
// 
// 