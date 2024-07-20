// map is a very common higher-order-fn
// The map fn maps the whole array with some logic.

// refer from higher-order-fns.js

const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;

};
const circumference = function(radius){
    return Math.PI * 2 * radius;

};
const diameter = function(radius){
    return 2 * radius;

};

const calculate = function(arr, logic){
    const output = [];
    for (let i = 0; i < arr.length; i++){
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(radius.map(area))

// the calculate fn and map fn are almost similar

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// map function just creates a new array and then alliterates over each of
// the elements in the radius and then returns the output.

