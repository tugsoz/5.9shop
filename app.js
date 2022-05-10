let cart = document.getElementsByClassName("cart")[0];
let cartItems = document.getElementsByClassName("cartItems")[0];

cart.addEventListener("click", function(){
    cartItems.classList.toggle("hide")
})


// const products = [
//     {
//         id: 1,
//         title: "RTX 3080Ti",
//         price: 1999.99,
//         image: "https://m.media-amazon.com/images/I/81TzR9+1IXL._AC_SL1500_.jpg"
//     },
// ]

// function listViewProducts() {
//     const listProducts = document.getElementsByClassName("products")[0];
//     let itemHtml = "";
//     products.forEach((item) => {
//       itemHtml += `
//       <div class="product" data-id=${item.id}>
//           <span class="product-title">${item.title}</span>
//           <img class="product-image" src="${item.image}" />
//           <div class="product-details">
//             <span class="product-price"><i>$${item.price}</i></span>
//             <button class="btn btn-primary product-button" type="button">Add to cart</button>
//           </div>
//       </div>`;
//     });
//     listProducts.innerHTML = itemHtml;
// }

if(cartItems.innerHTML.trim() == ""){
    cartItems.innerHTML = `
    <div class="emptyCartAlert">
        Your shopping cart is empty.
    </div>`
};

