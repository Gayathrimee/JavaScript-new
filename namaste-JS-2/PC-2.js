// handling the rejection of promise
// using CATCH


const cart = [ "shoes","pant","kurtas"];

// consumer part
// consuming a promise

const promise = createOrder(cart);  //is an asynch operation which returns us orderId

promise.then(function (orderId){
    // proceedToPayment(orderId);
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})


// producer part
// Creating a promise

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // createOrder 
        // validate card
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout( function (){
                resolve(orderId);
            },5000);
        }
    });

    return pr;
}
function validateCart(cart){
    return false;
}