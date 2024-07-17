// JSON : Java Script Object Notation

// Major Data Types in JS is:

// 1. numbers
//       var a = 10;

// 2. Boolean
//      var b = false;

//  3. String
//      var c = "code malayalam";

//  4. Array
//      var d = ['code', 'malayalam']

// 5. Object
//      var e = {
//      name: "code malayalam",
//      age: 1,
//      topic: ["javascript","react"],
//      caption : "keep calm and js"
//     };

// 6. Null
//      var f = null;


// //      ..............  object to json string

// var e = {
//     name: "code malayalam",
//     age: 1,
//     topic: ["javascript","react"],
//     caption : "keep calm and js"
//    };

//     //      json as String [converting object to string: STRINGIFY]

// // var jsonE = `
// //     {
// //     "name": "code malayalam",
// //     "age": 1,
// //     "topic": ["js","react"],
// //     "caption": "keep calm and js"
// //     }
// // `;
// // console.log(jsonE)

// //  or in simple Way, using stringify
// //
// var jsonE = JSON.stringify(e);
// console.log(jsonE)


// //  converting string to object : PARSE

// var obj = JSON.parse(jsonE);
// console.log(obj.caption)


//    //   ..............  array to json string

// var d = ['code', 'malayalam']

// var json = JSON.stringify(d)
// console.log(json)

// //       ..............  string to json string

// var c = 'code malayalam';

// var json = JSON.stringify(c)
// console.log(json)

// //       ..............   boolean to json string

// var b = false;

// var json = JSON.stringify(b)
// console.log(json)

//       ..............   numbers to json string

var a = 10;

var json = JSON.stringify(a)
console.log(json)


// 