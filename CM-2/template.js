//  connected with backtick.js

// advantages of backtick : 
// 1: multiple string
// 2: Expression inside a string


// const var1 = " code malayalam. It\"s  okay";
// const var2 = ' code malayalam. It"s  okay';
// const var3 = ` code malayalam. It"s okay`;


// console.log(var1);
// console.log(var2);
// console.log(var3);

//    Expression inside a string

// const ProductName = "pen";
// const price = "12 Rs";

// const value = 'The ' + ProductName + ' is ' + price;
// console.log(value)

//  using a backtick instead

// const productName = "pen";
// const price = "12 Rs";

// const value = `The ${productName} is ${price}`;
// console.log(value)


//  some more things in backticks

const productName = "pen";
const price = 12;

const value = `The ${productName} is ${price} Rs`;
const msg = ` The product is ${price > 10 ? 'costly' : 'cheap'}`   // tepmlate
console.log(value);
console.log(msg);

//          ........................


// 