//               connected with template.js

// advantages of backtick : 
// 1: multiple string
// 2: Expression inside a string


// 1:               Multiple String

// document.body.innerHTML = ` <div className = "item><h4> Product Name </h4><div> Price: 00 </div></div>`;

// document.body.innerHTML = '<div className = "item">' +
//  '<h4> Product Name</h4>' + 
//  '<div> Price : 00</div>' +
//   '</div>'; 

//  using a backtick instead

// document.body.innerHTML = `<div className = "item"> 
//  <h4> Product Name</h4> 
//  <div> Price : 01</div> 
//   </div>`; 



//          an eg in which html elements are added

const products = [
    {
        productName: "pen",
        price : 10
    },
    {
        productName: "book",
        price : 20
    }

];

document.body.innerHTML = products.map((item) => {
    return `
    <div className = "item"> 
        <h4> ${item.productName}</h4> 
         <div>${item.price} </div> 
     </div>`; 
})





// 