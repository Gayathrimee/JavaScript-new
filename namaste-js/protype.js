// refer from higher-order-fns.js, map.js

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

Array.prototype.calculate = function(logic){
    const output = [];
    for (let i = 0; i < this.length; i++){     //'this' over here is the 'radius'
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area))
console.log(radius.calculate(area));
// here in the calculate fn , the 'this'(radius) overhere point to the array(radius)
// which is 'calculate' being called  upon
// when we write this.length, it points out the this('radius') in the 
// calculate fn which will be pointed to the array(radius)


// console.log(calculate(radi,area));
console.log(calculate(radi,circumference));
console.log(calculate(radi,diameter));


