const Order = require('../../models/order');
// const Item = require('../../models/activity');

module.exports = {
    cart,
    addToCart,
    setActivityQtyInCart,
    checkout,
  };
  
  // A cart is the unpaid order for a user
  async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  }
  
  // Add an activity to the cart
  async function addToCart(req, res) {
  
  }
  
  // Updates an item's qty in the cart
  async function setActivityQtyInCart(req, res) {
  }
  
  // Update the cart's isPaid property to true
  async function checkout(req, res) {
  
  }