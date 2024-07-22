const cart = [ "shoes","pant","kurtas"];

createOrder(cart)   //orderId

proceedToPayment(orderId);

// ->

createOrder(cart)

function x(){
    proceedToPayment(orderId);
}

//  ->

createOrder(cart,function (orderId){
    proceedToPayment(orderId);
})

// since we give access to createOrder to call proceedToPayment later,
// we can't blindly believe it will call it properly
// so here we use PROMISE as a solution

// Promise is nothing but a we can assume it to be an empty object with some
// data value init. 
// And data value will hold whatever this createOrder api will return to us.

//  ->

createOrder(cart,function (orderId){
    proceedToPayment(orderId);
})

const promise = createOrder(cart);

// {data : undefined}

// the createOrder api is an async operation. 
// It will take sometime to execute, but we don't know how much it will take.
// But as soon the line ( line 35) executed, it will return as an 
// object with some data or with some undefined property.

// And suppose after 10secs/5secs, how much time it takes;
// it will give us an order and give us an alter details 
// and fill this (line 37) object back at some later point of time.

// {data : orderDetails}

// this is what promise is

// next is : what will happen when we have this order details or has the data with us
// what will happen to proceedToPayment

// now will we attach a callback fn to a callback fn
// we use a 'promise.then()' and then attach a callback fn to 'then'
// ->

promise.then(function(orderId){
    proceedToPayment(orderId);
});

// 1st the data was undefined, then after certain point of time 
// this will be filled with exact data,
// that will be written by createOrder api
// and once we have data inside the promise object,
// the callback fn that we attached to the promise object( in line 59)
// will be automatically called


// lets discuss the difference:

// In 1st case, we were passing the callback fn ( proceedToPament fn) to 
// another fn (createOrder fn)
// But in 2nd case, using promise, we are attaching a callback fn to a promise object

// The createOrder api will only do it's job;
// It will create an order and it will fill the object with a data, the 'orderId' whenever it wants to
// and as soon as the object is filled with a data,it will automatically call our callback fn
// and we will have the control of our program with us.
// Promises gives us the guarantee that it will callback the fn 
// whenver there is data inside the promise object
// and it will call the fn only once


// A promise is in one of these states:
// - Pending : initial state, neither fulfilled nor rejected.
// - Fulfilled : meaning that one operation was completed successfully
// - Rejected : meaning that the operation failed.

// Promise objects are immutable:
// Whenever there is data inside our promise object or whenever it is fulfilled,
// we can just pass it here and there in our code and we don't have to worru about 
// that someone can mutate out data.

// what is a promise :
// promise is an object representing the eventual completion or
// failure of an asynchronous operation.
// here, the createOrder() is an asynchronous operation
