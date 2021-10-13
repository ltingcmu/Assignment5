            // <div class="cart-items" id="cart-items-list">
            //     <div class="cart-row">
            //         <div class="cart-item cart-column">
            //             <img class="cart-item-image" src="assets/CinBun.png" width="100" height="100">
            //             <span class="cart-item-title">Original Cinnamon Roll</span>
            //              <div class="product-badge">
            //   <span class="product-badge-text">BEST SELLER</span>
            //   </div>
            //         </div>
            //         <span class="cart-price cart-column">$5.00</span>
            //         <div class="cart-quantity cart-column">
            //             <input class="cart-quantity-input" type="number" value="1"> 
            //             <button class="btn btn-danger" type="button"><img src="assets/trash_icon.png" alt="trash can icon" class="trash-icon-img"></button>
            //         </div>
            //     </div>

function displayCart() {
  // alert("i am running displayCart");
  // get local stored cart item array as a string
  let cartItemsStr = localStorage.getItem('cartItems')
  // convert to json object
  var cartItems = JSON.parse(cartItemsStr);
  // if no local stored car item array, initialize to empty array
  if (cartItems == null) {
      cartItems = JSON.parse('[]');
  }



  var totalPrice = 0

  var parent = document.getElementById('cart-items-list');
  for (var i = 0; i < cartItems.length; i++) {

    var cartItem = cartItems[i]

    // alert(cartItems[i]);
    
    var newRow = document.createElement('div');
    newRow.className = "cart-row";
    var newItem = document.createElement('div');
    newItem.className = "cart-item cart-column";
    var newItemPic = document.createElement('img');
    newItemPic.className = "cart-item-image";
    newItemPic.src = "assets/CinBun.png";
    newItemPic.width = 100;
    newItemPic.height = 100;
    var newItemTitle = document.createElement('span');
    newItemTitle.className = "cart-item-title";
    newItemTitle.innerHTML = cartItem.productName + " - " + cartItem.glazing;
    newItem.appendChild(newItemPic);
    newItem.appendChild(newItemTitle);
    newRow.appendChild(newItem);
    parent.appendChild(newRow);

    totalPrice += 5 * parseFloat(cartItem.quantity)
  }

  var finalTotalPrice = document.getElementById('final-total-price');
  finalTotalPrice.innerHTML = "$" + totalPrice;


}



window.onload = function() {
  displayCart();
}