//      "map" is used to transform an Array.

// Transform means, suppose we want to transform each and every element of the array and
// get a new array out of it.

const arr = [5,1,3,2,6]

// double - [10,2,6,4,12]

function double(x){
    return x*2;
}
const output = arr.map(double)
console.log(output)
// 1. first we declared a variable 'output' 
// 2. call a map fn on an array (here the array is defined as arr)
// 3. Then we have to pass a fn inside it, a fn which tells us that 
// what do we need to do. eg: double, binary, triple
// 4. now we have to create fn (here it is double)
// then return the operation inside it (here it is x*2)
// log 'output' to see the output

// triple - [15,3,9,6,18]
function triple(x){
    return x*3;
}
const out = arr.map(triple)
console.log(out)
// here we can see the array are doubled


// binary - ["101", "1", "11", "10", "110"]
// to return binary : return x.toString(2) => may be 2 implies binary
function binary(x){
    return x.toString(2);
}
const op = arr.map(binary)
console.log(op)

// we can also declare the fn inside the map() instead of defining it sepearately

const outpt = arr.map(function binary(x){
    return x.toString(2);
});
console.log(outpt);
// will get the same result

// using arrow fn in map:

const result = arr.map((x) => {
    return x.toString(2);
});
console.log(result);

// (or) can also write without return

const reslt = arr. map((x) => x.toString(2));
console.log(reslt);
// logic: we write arr.map:
// it means maping each of the values 
// x or each and every value in array is transformed in to its binary
// it is like maping each and every value to another value, creating 
// an array and returning it into an output
