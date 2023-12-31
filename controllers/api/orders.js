const Order = require('../../models/order');
// const Activity = require('../../models/activity');

module.exports = {
    cart,
    addToCart,
    setActivityQtyInCart,
    checkout,
    getAllForUser
  };

  // new function to retreive the order history for a user
  async function getAllForUser(req, res) {
    const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
    res.json(orders);
  }
  
  // A cart is the unpaid order for a user
  async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  }
  
  // Add an activity to the cart
  async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addActivityToCart(req.params.id);
    res.json(cart); 
  }
  
  // Updates an activity's qty in the cart
  async function setActivityQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setActivityQty(req.body.activityId, req.body.newQty);
    res.json(cart);
  }
  
  // Update the cart's isPaid property to true
  async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    // cart.orderName = req.body.orderName;
    await cart.save();
    res.json(cart);
  }



