// async fn always returns a value

async function getData(){
    return 'namaste';
}
const data = getData();
console.log(data);
// here we doesn't return a promise. So the fn automatically wrap the value 
// inside a promise and will return a promise.
// the output will be like promise {'namaste'}

// returning promise :

async function getData(){
    return 'namaste';
}
const dataPromise = getData();
dataPromise.then((res) => console.log(res));
// this will print only 'namaste'   

