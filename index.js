var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
 // write your code here
 var itemAttributes = {
 itemName : item,
 itemPrice : getRandomInt(1, 100)
 }
 cart.push(itemAttributes)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var announcement = "In your cart, you have"
  var i
  getCart()
  if (cart.length > 0) {
   for (i = 0; i < cart.length; i++) {
    if (cart.length > 0 && i + 1 !== cart.length) {
        announcement = announcement + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
     } 
    else if (cart.length > 0 && i + 1 === cart.length) {
      announcement = announcement + `and  ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
  }
    return announcement
  }  
  else {
    return "Your shopping cart is empty."
  }
}  

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
