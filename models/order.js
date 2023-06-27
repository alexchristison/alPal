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

module.exports = mongoose.model('Order', orderSchema);