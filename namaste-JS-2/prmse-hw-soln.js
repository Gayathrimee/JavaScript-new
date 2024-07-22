const cart = ["Bitcoin", "Glasses", "Kurta", "Jacob & Co", "Xbox"]

let order



createOrder(cart)

  .then(function (orderId) {

    order = orderId

    return proccedToPayment(orderId)

  })

  .then(function (pin) {

    return showOrderSummary(pin)

  })

  .then(function (msg) {

    updateWallet(order, msg)

  })

  .catch((err) => {

    console.log(err)

  })



function createOrder(items) {

  return new Promise((reslove, reject) => {

    if (items.length >= 5) {

      console.log("Order: 49591214")

      reslove(49591214)

    } else {

      const err = new Error("Add more Items. Items must be >=5")

      reject(err)

    }

  })

}



function proccedToPayment(orderId) {

  return new Promise((reslove, reject) => {

    setTimeout(() => {

      if (orderId === 49591214) {

        console.log("OrderID: 49591214 Enter your UPI Pin")

        const pin = 135790 

        reslove(pin)

      } else {

        const err = new Error("Payment not succesful")

        reject(err)

      }

    }, 5000)

  })

}



function showOrderSummary(pin) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (pin === 135790) {

        resolve("Payment Succesful! Order Created: ")

      } else {

        const err = new Error("WRONG PIN!")

        reject(err)

      }

    }, 4000)

  })

}



function updateWallet(order, msg) {

  console.log(msg + order)

}