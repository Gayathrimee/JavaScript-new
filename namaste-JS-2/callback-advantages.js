const cart = ["shoes","pants","kurta"];

api.createOrder(cart,function (){

        api.proceedToPayment(function (){

            api.showOrderSummary(function (){
                
                api.updateWallet()
            }
            )
        })
});


// 1. created the order
// 2. Payment
// 3. Order Summary
// 4. Update Wallet