// const cart = ["shoes","pant","kurtas"];

// createOrder(cart)
// .then (function(orderId){
//     console.log(orderId);
//     return orderId;
// })
// .then(function(orderId){
//    return proceedToPayment(orderId);
// })
// .then(function(orderSummary){
//     showOrderSummary(orderSummary);
// })
// .then(function(walletBalance){
//     updateWallet(walletBalance)
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(err){
//     console.log(err.message);
// })


// function createOrder(cart){
//     const pr = new Promise(function(resolve,reject){
//         if(!validateCart(cart)){
//             const err = new Error("cart is not valid")
//             reject(err);
//         }
//         const orderId = "12345";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             },1000);
//         }
//     });
//     return pr;
// }

// function proceedToPayment(orderId){
//     return new Promise (function (resolve,reject){
//         resolve("payment successful");
//     })
// }

// function showOrderSummary(orderSummary){
//     return new Promise((resolve, reject) => {
//         resolve("showing order summary")
//     })
// }

// function updateWallet(walletBalance){
//     return new Promise((resolve,reject) => {
//         resolve("the wallet balance is");
//     })
// }

// function validateCart(cart){
//     return false;
// }
//full of fault

// ans of akshay saini

const cart = ["Bitcoin","Glasses","Kurta","Jacob & Co","Xbox"]

let order

createOrder(cart)

.then(function (orderId){
    order = orderId
    return proceedToPayment(orderId)
})

.then(function (pin){
    return showOrderSummary(pin)
})

.then(function (msg){
    updateWallet(msg,order)
})

.catch( (err) => {
    console.log(err)
})


function createOrder(items){
    return new Promise((resolve,reject) => {
        if (items.length >= 5){
            console.log("order:32415134")
            resolve(32415134)
        }
        else{
            const err = new Error("Add more Items. Items must be >= 5")
            reject(err)
        }
    })
}

function proceedToPayment(orderId){
    return new Promise((resolve,reject) =>{

        setTimeout(() => {

        if(orderId === 32415134){

                console.log("orderId: 32415134, Enter your UPI Pin")
                const pin = 23445
                resolve(pin)

                } else{
                    const err = new Error("payment not successful")
                    reject(err)
                }
        }, 3000)
    })
}


function showOrderSummary(pin){
    return new Promise((resolve,reject) =>{

        setTimeout(() => {

            if ( pin = 23445){
                resolve(" Payment Successful! Order Created: ")

            } else{

                const err = new Error ("WRONG PIN!")
                reject (err)
            }
        }, 4000)
    })
}

function updateWallet(order,msg){

    console.log(msg + order)
}

