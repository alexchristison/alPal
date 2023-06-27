const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/activities/:id
router.post('/cart/activities/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setActivityQtyInCart);
// GET /api/orders/history
router.get('/history', ordersCtrl.orderHistory);

module.exports = router;