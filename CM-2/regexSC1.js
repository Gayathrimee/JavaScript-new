// const regexp = /cat/;
// const result = regexp.test('my cat');
// console.log(result)
//  //  -> shows a true result

//      ............ (or)

// const regexp = /cat/i;
// const result = regexp.test('my Cat');
// console.log(result)
// //  -> "i" is a flag. It make the statement true whether it is lowercase or uppercase

//      ............ (or)

// const regexp = new RegExp('cat','i');
// const result = regexp.test('my Cat');
// console.log(result)
// //  -> 'cat': pattern,    'i': flag


//  going through more examples

// const regexObj = /cat/i;

//  const str1 = "The cat is white";
//  const str2 = "Rat eats meat";
//  const str3 = "Is it ok?";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      // true (cat string is only in this one)

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      // false

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      // false


//      ...using SPECIAL CHARACTERS


//  1. []

// const regexObj = /[cr]at/i;   //  can also use {[a-z], [0-9], [a-z0-9],...}

//  const str1 = "The cat is white";
//  const str2 = "Rat eats meat";
//  const str3 = "Is it ok ?";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      // true (cat string is only in this one)

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      // true  (rat)

//  var result3 = regexObj.test(str3);
//  console.log(result3);  

//  2. -        {used to mention range in square bracket[-]}


// const regexObj = /[0-9]at/i;  

//  const str1 = "The cat is white";
//  const str2 = "Rat eats meat";
//  const str3 = "Is it ok 0at?";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      // false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //false

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      // true (0at)
                     
// 3. ^ ,  $        (character, dollar sign)
//                  ^ : starting of a string, $ : ending of a string

// const regexObj = /^cat/i;  

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meat?";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      // false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //true

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      // false

//  and

// const regexObj = /meat$/i;  

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meat?";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      // false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //true

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      // false (meats'?')


//  flag 'm' -> multilines : it consider multilines too

// const regexObj = /meat$/im;  

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meat?";
//  const str4 = `
//  good meat
//  is always good
//  `;

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //true

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //false

//  var result4 = regexObj.test(str4);
//  console.log(result4);                      //true


// const regexObj = /^is/i;  

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meat?";
//  const str4 = `
// good meat 
// is always good
//  `;

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //false

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //true

//  var result4 = regexObj.test(str4);
//  console.log(result4);                      //true


//   4. ?  { means optional: there may or maynot exist a character }
//  also called 0 or 1 reference : 0 = no character, 1 = character exist

// const regexObj = /meats?$/i;    // -> is true whether there is a 's' or not

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meats";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //true

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //true

//   (or)

//  5.  ()  {braces   : is a special character used to group characters }

// const regexObj = /fish(es)?$/i;    // -> () is used to group : here es is optional

//  const str1 = "The cat is white";
//  const str2 = "cat eats fish";
//  const str3 = "Is it ok fishes";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //true

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //true

//  6. * , +      { characters similar to ?}
//  *   -> 0 or many  (can have many)
//  +   -> 1 or many  (atleast have 1 upto many)

// //  *
// const regexObj = /meats*$/i;   

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meatssss";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //true

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //true

//   here the 3rd result will be false since str3 has many 'ssss'
//   we use * instead of ? so that it became true

//  +
// const regexObj = /meats+$/i;   

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meatssss";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //false

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //true

//   the 2nd become false since it has no 's'

// 7:  .  {dot: any character -> means it would take any character,
//                      no need to specify, but single, one item}

// const regexObj = /meat.+$/i;   

//  const str1 = "The cat is white";
//  const str2 = "cat eats meat";
//  const str3 = "Is it ok meat'0tks*^/@!'";

//  var result1 = regexObj.test(str1);
//  console.log(result1);                      //false

//  var result2 = regexObj.test(str2);
//  console.log(result2);                      //false

//  var result3 = regexObj.test(str3);
//  console.log(result3);                      //true


//  now solve regex.js