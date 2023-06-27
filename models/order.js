const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const activitySchema = require('./activitySchema');
const lineActivitySchema = new Schema({
  qty: { type: Number, default: 1 },
  activity: activitySchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});
lineActivitySchema.virtual('extDuration').get(function() {
  // 'this' keyword is bound to the lineActivity document
  return this.qty * this.activity.duration;
});
const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineActivities: [lineActivitySchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineActivities.reduce((total, activity) => total + activity.extDuration, 0);
});
orderSchema.virtual('orderQty').get(function() {
  return this.lineActivities.reduce((total, activity) => total + activity.qty, 0);
});
orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isPaid: false },
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an activity to a cart (unpaid order)
orderSchema.methods.addActivityToCart = async function (activityId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this;
    // Check if the activity already exists in the cart
    const lineActivity = cart.lineActivities.find(lineActivity => lineActivity.activity._id.equals(activityId));
    if (lineActivity) {
      // It already exists, so increase the qty
      lineActivity.qty += 1;
    } else {
      // Get the activity from the "catalog"
      // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
      const Activity = mongoose.model('Activity');
      const activity = await Activity.findById(activityId);
      // The qty of the new lineActivity object being pushed in defaults to 1
      cart.lineActivities.push({ activity });
    }
    // return the save() method's promise
    return cart.save();
  };

  // Instance method to set an activity's qty in the cart
orderSchema.methods.setActivityQty = function(activityId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the line activity in the cart for the menu activity
    const lineActivity = cart.lineActivities.find(lineActivity => lineActivity.activity._id.equals(activityId));
    if (lineActivity && newQty <= 0) {
      // Calling remove, removes itself from the cart.lineActivities array
      lineActivity.remove();
    } else if (lineActivity) {
      // Set the new qty - positive value is assured thanks to prev if
      lineActivity.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
  };

module.exports = mongoose.model('Order', orderSchema);