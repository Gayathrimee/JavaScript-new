const cart = [ "shoes","pant","kurtas"];

// without promise:

createOrder(cart,function (orderId){
    proceedToPayment(orderId);
})

// with promise:

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
});