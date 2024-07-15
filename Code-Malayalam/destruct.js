// const obj1 = {
//     name:'code  malayalam',
//     place: 'kerala',
//     rank:100
// }
// function myFunction (){
//     // const name = obj1.name;
//     // const place = obj1.place;
//     // const rank = obj1.rank;

// // can be rewritten as: and this is called object restructuring

//     const {
//         name,
//         place,
//         rank,
//     } = obj1;

//     console.log(name,place,rank)
// }
// myFunction()

// can replace others except name/anything by ...anyname
// eg:

// const obj1 = {
//     name:'code  malayalam',
//     place: 'kerala',
//     rank:100
// }
// function myFunction (){

//     const {
//         name,
//         ...pr
//     } = obj1;

//     console.log(name, pr)
// }
// myFunction()

//    arrays

//:: const obj1 = {
//     name:'code  malayalam',
//     place: 'kerala',
//     rank:100
// }
// const marks = [1,4,3,67,12];

// function myFunction (){
//     const [a,b,c,d,e] = marks;
//     console.log(a,b,c,d,e)
// }
// myFunction()

//:: const obj1 = {
//     name:'code  malayalam',
//     place: 'kerala',
//     rank:100
// }
// const marks = [1,4,3,67,12,11,10,20];

// function myFunction (){   
//     const [a, b, c, ,...others] = marks;  //
//     console.log(a,b,c,others)    // shows other number except 4
// }
// myFunction()

//::: const obj1 = {
//     name:'code  malayalam',
//     place: 'kerala',
//     rank:100,
//     status:undefined
// }
// const marks = [1,4,3,67,12,11,10,20];

// function myFunction (){   
//     const {
//         name,
//         place,
//         rank,
//         status 
//     } = obj1
//     console.log(name,place,rank ,status);
// }
// myFunction()

// const marks = [1,4,6];

// function myFunction(){
//     const [a,b,c,d=false] = marks;
//     console.log(a,b,c,d);
// }
// myFunction()

//  .... 

// const marks = [1,4,6];

// function myFunction([a,b,c]){
//     console.log(a,b,c)
// }
// myFunction(marks) 

// ....
// const marks = [1,4,6];
// const obj1 = {
//         name:'code  malayalam',
//         place: 'kerala',
//         rank:100
// }

// function myFunction(){ 
//     var [a,b,c] = getvalue();
//     console.log(a,b,c);
// }
// function getValue(){
//     return marks;
// }
// myFunction(obj1) 


//        ...................................................................

var obj1 = {
    name: 'code malayalam',
    place: 'kerala'
}
var obj2 = {
    name: ' bob ',
    place: 'US'
}

function abc(){
    var{
        name,
        place
    } = obj1;

    var {
        name:name2,
        place:place2
    } = obj2;
    console.log(name,place,name2,place2)
}   
abc();








// 
// 