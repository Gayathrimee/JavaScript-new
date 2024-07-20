function x(){
    console.log("Namaste");
}

function y(x){
    x();
}

// the fn 'y' takes another fn 'x' as an argument 
// so the fn 'y' is called "Higher Order Function"
// and 'x' is the callback fn

// ..........

const radius = [3,2,1,4];       // is the radius of 4 circles
// to calculate the area of the circles

const calculateArea = function (radius){
    const output = [];
    for (let i= 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
};

console.log(calculateArea(radius));

// to calculate the circumference of the circles

const calculateCircumference = function (radius){
    const output = [];
    for (let i = 0; i< radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

// to calculate the diameter of the circles

const calculateDiameter = function (radius){
    const output = [];
    for (let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));

// DRY : Don't Repeat Yourself
// i.e. here we copied same thing again and again
// we shouldn't do that 

// let's extract the logic from it:

const radiu = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;

};
const circumference = function(radius){
    return Math.PI * 2 * radius;

};
const diameter = function(radius){
    return 2 * radius;

};

const calculate = function(radius, logic){
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radi,area));
console.log(calculate(radi,circumference));
console.log(calculate(radi,diameter));



