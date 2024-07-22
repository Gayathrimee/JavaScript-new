//  Sum

const arr = [5,1,3,2,6]

function findSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
console.log(findSum(arr))

// reduce : Max

const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);4
console.log(output)

//  Max

function findMax(arr){
    let max = 0;
    for (let i=0; i < arr.length ; i++){
        if (max < arr[i] ){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

// reduce : max

const result = arr.reduce(function(max,curr){
    // let max = 0;
    if(max < curr){
        max = curr;
    }
    return max;
},0);
console.log(result);

// .........................

//  map : double , triple, binary

function double(x){
    return x * 2;
}
const outmap = arr.map(double);
console.log(outmap);

// ...
const outmp = arr.map(function /*triple*/ (x){
    return x*3;
})
console.log(outmp);

// ... arrw fn without return, can also use return here
const outm = arr.map((x) => x.toString(2))
console.log(outm);

// .........................

//  filter

// ... odd numbers
function isOdd(x){
    return x % 2;
}
const outfilter = arr.filter(isOdd);
console.log(outfilter);

// ... even numbers
const outfltr = arr.filter(function(x){
    return x % 2 === 0;
})
console.log(outfltr);

// ...
const outfil = arr.filter((x) =>{
   return  x < 3;
});
console.log(outfil);

// ...
const outfi = arr.filter((x) => x > 3);
console.log(outfi);


// h.w

const users = [
    {firstName : "Akshay", lastName : "Saini", age : 26},
    {firstName : "Donald", lastName : "Trump", age : 75},
    {firstName : "Elon", lastName : "Musk", age : 50},
    {firstName : "Deepika", lastName : "Padukone", age : 26},
];

const value = users.reduce(function(acc,curr) {
    if(curr.age < 30){

        acc.push(curr.firstName);        //if age of current user is < 30, push there firstName into the acc array
    }

    return acc;

}, []);
console.log(value);

