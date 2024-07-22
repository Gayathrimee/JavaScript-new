const cart = [ "shoes","pant","kurtas"];

createOrder(cart,function (orderId){

    proceedToPayment(orderId,function(paymentInfo){

        showOrderSummary(paymentInfo, function(){

            updateWalletBalance();

        });
    });
});

// this is called Callback Hell. Promises helps us to avoid this.
// This is handled using promise chaining

// const promise = orderCart(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// -> this is equavalent to writing like :

createOrder(cart)
.then(function (orderId){
   return proceedToPayment(orderId);
})
.then(function (paymentInfo){
   return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo){
   return updateWalletBalance(paymentInfo);
});

// the same thing using arrow fn - creates it more readable

createOrder(cart)
    .then (orderId => proceedToPayment(orderId))
    .then (paymentInfo => showOrderSummary(paymentInfo))
    .then (paymentInfo => updateWalletBalance(paymentInfo));