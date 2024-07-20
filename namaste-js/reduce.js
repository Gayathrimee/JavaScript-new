const arr = [5,1,3,2,6];

// sum or max

// 1st let try to reduce in a non-functional way.

function findSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// now let's use reduce to find the sum

const output = arr.reduce(function (acc,curr){

})
// the reduce alliterate this fn over each every element of this array
// the 2nd parameter, current ,while we alliterating, represents each value
// in the reduce fn
// the 1st parameter, accumulator, is used to accumulate the values
// or accumulate the result what we have to get out of those values
//  which are present in the array

const outpt = arr.reduce(function (acc,curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(outpt);

// max

function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//  using reduce
//  acc is the general word, but let's use max here instead of acc 

const result = arr.reduce(function (max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);
 console.log(result);
