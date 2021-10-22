// Overlay effect
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

//Dropdown Button
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/


//Add to Cart and local storage - https://blog.logrocket.com/localstorage-javascript-complete-guide/ ; https://stackoverflow.com/questions/55328748/how-to-store-and-retrieve-shopping-cart-items-in-localstorage/55328889


function addToCart() {
  // get form element
  const form = document.getElementById('product-selections');

  if (document.getElementById("radio-one").checked === false
    && document.getElementById("radio-two").checked === false
    && document.getElementById("radio-three").checked === false
    && document.getElementById("radio-four").checked === false) {
    return;
  }

  //cartItems is a JSON array. 
  //cartItemsStr is a json array string, or is null
  //cartItems is null if cartItemsStr is null. So then we initialize it


  // get local stored cart item array as a string
  let cartItemsStr = localStorage.getItem('cartItems')
  // convert to json object
  var cartItems = JSON.parse(cartItemsStr); // Turns a string into code - creates an “object” - an instance of a JSON class. Need a JSON class object in order to add onto it
  // if no local stored cart item array, initialize to empty array
  if (cartItems == null) {
    cartItems = JSON.parse('[]');
  }
  
  // construct array data of form selections
  //The FormData part creates an array and the for loop turns it into a JSON object. CartItems is an array of JSON
  const newItem = Array.from(new FormData(form));

  // creating empty object to convert array format
  var newItemObject = { productName: 'Original Cinnamon Bun' }

  for (var i = 0; i < newItem.length; i++){
    var field = newItem[i];
    var propertyName = field[0]
    var propertyValue = field[1]
    newItemObject[propertyName] = propertyValue
  }


  // add new selection to cart data
  cartItems.push(newItemObject);
  // update local storage with cart items that now contain the new item
  // store data in a json format for readability
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // return false so that the button doesn't load a new page
  return false;
}






