const users = [
    {firstName : "Akshay", lastName : "Saini", age : 26},
    {firstName : "Donald", lastName : "Trump", age : 75},
    {firstName : "Elon", lastName : "Musk", age : 50},
    {firstName : "Deepika", lastName : "Padukone", age : 26},
];

// 1. list of full names
// ["akshay saini", "donald trump",...]

const output = users.map( x => x.firstName + " " + x.lastName);
console.log(output);

// 2. { 26:2, 75:1, 50:1 }

const value = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age];
    }
    else{
        acc[curr.age] = 1;          
    }
    return acc;
}, {})  
console.log(value);     
// the initial value here is empty object becz if there is no object it will print empty
// logic :
// if accumulator of current age is present only once it will print it as 1,(ekse part)
// if it read one age more than one, it will add it up (if part)

// 3. first name of all the people whose age is 30:

const result = users.filter(x => x.age < 30);
console.log(result)
// here we get the result with first name as well as last name,
// to get only firstName we can use map along with filter
// these fns have the power of chaining. we can use 3 of them in one go.
// here 'map' works after the output of 'filter'

const reslt = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(reslt);
//  Urekaaaaaaaaaaaaaaaaaaaaaaaaaaa
// logic : 1st we take the users, then we filtered it out;
// we filtered people with age < 30;
// it will shrink the users into people only with age less than 30
// then comes the map; 
// we pass the info to the map that we only need 1st names
// then comes the output of only first names with age < 30

//  use reduce to do the 3rd question