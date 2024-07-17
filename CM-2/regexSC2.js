//  const regex = /.*/i;           // . any characters, * returns many times
//  const string = 'hello';

//  const result = regex.test(string);
//  console.log(result);           // true

//  .....

// const regex = /[jkm]/i;           // is true if the character contains any j,k,m
// const string = 'hello';

// const result = regex.test(string);
// console.log(result);           // false

// 8. [^jms]    {not: means other characters except those}

// const regex = /[^jkm]/i;           // is true if the character doesn't contains any j,k,m
// const string = 'hello';

// const result = regex.test(string);
// console.log(result);           // true

//      .........

// const regex = /o+$/i;          // ?: 0 or more, +: 1 or more
// const string = 'helloo ';

// const result = regex.test(string);
// console.log(result);           // true

// 9. {}   -> curly brace : to give exact no. of characters

// const regex = /l{2}o$/i;          // l should come only 2 times and then comes o and the string should end, if it is 4, it false
// const string = 'hello';

// const result = regex.test(string);
// console.log(result);           // true

// ....

// const regex = /l{4,6}o$/i;          
// const string = 'hellllo';

// const result = regex.test(string);
// console.log(result);           // true

//  ....

// const regex = /hel{2,}o$/i;       // 2, -> 2 or more , i.e. 2 or more l can come after 'he'  
// const string = 'hello';

// const result = regex.test(string);
// console.log(result);           // true


// 10. \d        { digits from 0-9 is called backslash d (\d) }

// const regex = /\d/i;       
// const string = 'hello';

// const result = regex.test(string);
// console.log(result);           // false

//  ....
// const regex = /\d/i;       
// const string = 'he9llo';

// const result = regex.test(string);
// console.log(result);           // true

// 11. \D    { non-digits }

// const regex = /\D/i;       
// const string = 'hello';

// const result = regex.test(string);
// console.log(result);           // true

 //  ....
// const regex = /\D/i;       
// const string = '83493';             

// const result = regex.test(string);
// console.log(result);           // false

//  ....
// const regex = /\D/i;       
// const string = '83493ab';             

// const result = regex.test(string);
// console.log(result);           // true

// '\' is called escape character


//                  .................................

// const regex = /\./i;       
// const string = '335';             

// const result = regex.test(string);
// console.log(result);           // false : since it contains no '.'

// 12. | {or : jdfksj | ksdjfasdh  => either the left side or the right side of the brace}

// flag "g"
//  is a global flag
//  is used to search all string

// eg:          "a-b-c".replace(/-/,":")  ==> 'a:b-c'
// (instead)    "a-b-c".replace(/-/g,":")  ==> 'a:b:c'


//          Replace

// eg:  
// '12-10-04' : want to replace 04 with 2004
// ->    '12-10-04'.replace(/(\d{2})$/,'20$1')  -> 20 + lasr 2 numbers
//  :     "12-10-2004"



// 