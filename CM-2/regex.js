// function textOnChange(arg){
//     const label = document.getElementById('validation-label');

//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//         label.style.color = "red";
//     } else {
//         label.innerText = '';
//     }

// }

// function validate(value){
//     return false;
// }


// conditions are:

//  Allowed only
//   . Characters A - Z
//   . Numbers 0-9
//   . Underscore _

//  Starts only with characters

// function textOnChange(arg){
//     const label = document.getElementById('validation-label');

//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//         label.style.color = "red";
//     } else {
//         label.innerText = '';
//     }

// }

// function validate(value){
//     const regex = /^[a-z][a-z0-9_@]*$/i;    // -> starts with a-z,  center can be a-z/0-9/_,
// //                                          can have many or nothing is okay, and the string ends
//     const result = regex.test(value);
//     if (result){
//         return '';
//     }else {
//         return 'Invalid String';
//     }
// }


//       ---- dd-mm-yyyy pattern ----------

// function textOnChange(arg){
//     const label = document.getElementById('validation-label');

//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//         label.style.color = "red";
//     } else {
//         label.innerText = '';
//     }

// }

// function validate(value){
//     const regex = /^\d{1,2}-\d{1,2}-\d{4}$/i;    // -> starts with a-z,  center can be a-z/0-9/_,
// //                                          can have many or nothing is okay, and the string ends
//     const result = regex.test(value);
//     if (result){
//         return '';
//     }else {
//         return 'Invalid String';
//     }
// }

//      ------ specifying dates nd months

// function textOnChange(arg){
//     const label = document.getElementById('validation-label');

//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//         label.style.color = "red";
//     } else {
//         label.innerText = '';
//     }

// }

// function validate(value){
//     const regex = /^([012]?\d|3[01])-([0]?\d|[1][012])-\d{4}$/i;    

//     const result = regex.test(value);
//     if (result){
//         return '';
//     }else {
//         return 'Invalid String';
//     }
// }

//      how to seperate or extract date,month,year

//  let match is a fn not in regex but in string called 'value' with argument regex

// function textOnChange(arg){
//     const label = document.getElementById('validation-label');

//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//         label.style.color = "red";
//     } else {
//         label.innerText = '';
//     }

// }

// function validate(value){
//     const regex = /^([012]?\d|3[01])-([0]?\d|[1][012])-\d{4}$/i;  

//     const result = value.match(regex);
//     console.log(result)                 // in test, if it matches it returns false ; 
// //                                 whereas in match, if matches it returns true , if not returns null
// }

//  ....

// function textOnChange(arg){
//     const label = document.getElementById('validation-label');

//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//         label.style.color = "red";
//     } else {
//         label.innerText = '';
//     }

// }

// function validate(value){
//     const regex = /^([012]?\d|3[01])-([0]?\d|[1][012])-\d{4}$/i;  
//     const result = value.match(regex);
//     console.log(result) ;              

//     if (result === null){
//         return 'invalid string'
//     }else {
//         return '';
//     }

// }

//  () -> capturing group, (?:) -> non-capturing group
//  they are used to extract substances

function textOnChange(arg){
    const label = document.getElementById('validation-label');

    const error = validate(arg.value);
    if (error) {
        label.innerText = error;
        label.style.color = "red";
    } else {
        label.innerText = '';
    }

}

function validate(value){
    const regex = /^([012]?\d|3[01])-(?:[0]?\d|[1][012])-(\d{4})$/i;   //wont show month in console
    const result = value.match(regex);
    console.log(result) ;              

    if (result === null){
        return 'invalid string'
    }else {
        return '';
    }

}





// 