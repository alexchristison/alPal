import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an activity to the cart
export function addActivityToCart(activityId) {
  // Just send activityId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/activities/${activityId}`, 'POST');
}

// Update the activity's qty in the cart
// Will add the activity to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setActivityQtyInCart(activityId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { activityId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// Fetches all orders for the logged in user
export function getAllForUser() {
    return sendRequest(`${BASE_URL}`);
  }