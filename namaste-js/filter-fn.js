// Filter fn is used to filter the values inside an array

const arr = [5,1,3,2,6];

// filter odd values

function isOdd(x){
    return x % 2;
}
const output = arr.filter(isOdd);
console.log(output);

// ...

const outpt = arr.filter(function (x){
    return x % 2;
})
console.log(outpt);

// ...

const result = arr.filter((x) => {
    return x % 2;
})
console.log(result);

// ...

const reslt = arr.filter((x) => x % 2);
console.log(reslt); 

// filter even values

const ans = arr.filter((x) => x % 2 === 0);
console.log(ans);

// to filter out all the values which is greater than 4

const value = arr.filter((x) => x > 4);
console.log(value);


const val = arr.filter((x) => x <= 4);
console.log(val);
