// function add(a,b){
//     const c = a + b;
//     return c;
// }
// function main(){
//     const  res = add ( 3,4);
//     console.log(res);
// }
// main();

//  (or)

// function add(a,b){
//     function myAdd() {
//       const c = a + b;
//       return c;
// }
// return myAdd;
// }

// function main(){
//     const  res = add ( 3,4);
//     console.log(res);
// }
// main();

// function add(a,b){
//     function myAdd() {
//       const c = a + b;
//       return c;
// }
// return myAdd;
// }
// function main(){
//     const res = add( 3,4);
//     const val = res();
//     console.dir(res);
// }
// main();
 
//        foEach

// function main(a){
//     [1,2,3,4,5]
//         .forEach(function(i){
//             console.log(i,a);
//         });
// }
// main (10)

//                  .......................................

//               Use Cases of Closure

// var objs = [
//     {
//         name: 'one',
//         msg:'hello i am one'
//     },
//     {
//          name: 'two',
//         msg:'hello i am two'
//     },
//     {
//          name: 'three',
//         msg:'hello i am three'
//     },
// ];

// function main() {
//     objs.forEach((item) => {
//         const bt = document.createElement('button');
//         bt.innerHTML = item.name;
//         bt.onclick = myCallback;
//         document.body.appendChild(bt);
//     });
//     function myCallback(){
//         alert('hi');
//     }
// }

// main();


var objs = [
    {
        name: 'one',
        msg:'hello i am one'
    },
    {
         name: 'four',
        msg:'hello i am two'
    },
    {
         name: 'three',
        msg:'hello i am three'
    },
];

function main() {
    objs.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getCallback(item.msg);
        document.body.appendChild(bt);
    });
}
    function getCallback(arg){
        return function(){
            alert (arg)
        }
}


main();














// 







