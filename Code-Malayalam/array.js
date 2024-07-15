// forEach() find() filter() map() reduce() //

const arr = [
    {
        name:'Alice',
        mark: 35,
        place:'Kannur'
    },
    {
        name:'Bob',
        mark: 28,
        place:'Palakkad'
    },
    {
        name:'Catherine',
        mark: 44,
        place:'Thrissur'
    },
    {
        name:'Daniel',
        mark:23,
        place:'Kollam'
    }
];
// console.log(arr)

//1:     forEach()

//a: all items
// arr.forEach( (item) =>{
//     console.log(item);
// });

// b: name only
 
// arr.forEach( (item) =>{
//     console.log(item.name);
// });

// c: sum of marks

// let sum = 0;
// arr.forEach( (item) =>{
//     sum = sum + item.mark
// });
// console.log (sum)

// d: index

// var found = arr.forEach( (item,index) =>{
//     console.log(index)
// });

// 2:            find()

// a: callback

// var found = arr.find( (item) =>{
//  return item.name === 'Bob';
// });
// console.log(found)


// var found = arr.find( (item) =>{
//     return item.mark < 30;
//    });
//    console.log(found)

//3:              filter
     
//a:   var found = arr.filter( (item) =>{
//     return item.name === 30;
//    });

//    console.log(found)

//b: index
// var found = arr.filter( (item,index) =>{
//     return index < 2;
//    });

//    console.log(found);


// 4:                         Map()

// var newArr = arr.map( (item) =>{
//     return item.name + item.place
//    });

//    console.log(newArr);


// var newArr = arr.map( (item) =>{
//     return {
//         ...item,
//         country: 'INIDA'
//     };

//    });
//    console.log(newArr)


//    5:          reduce()

// var value = arr.reduce( (item) =>{
//     return 100
//    });
//    console.log(value)

// var value = arr.reduce( (total,item) =>{
//     return item.mark;
//    }, 0);
//    console.log(value)

var value = arr.reduce( (total,item) =>{
    total.push(item.name)
    return total ;
   }, []);
   console.log(value)






// 
// 