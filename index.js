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
    if (cart.length > 0 && i + 1 !== cart.length && cart.length !== 1) {
        announcement = announcement + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
     }
     else if (cart.length > 0 && i + 1 === cart.length && cart.length !== 1) {
      announcement = announcement + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    else if (cart.length === 1) {
      announcement = announcement + ` ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }
    return announcement
  }  
  else {
    return "Your shopping cart is empty."
  }
}  

function total() {
  getCart()
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  getCart()
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.prototype.splice()
    }
}
}

function placeOrder(cardNumber) {
  // write your code here
}
