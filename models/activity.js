const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Activity list queries)
require('./category');
const activitySchema = require('./activitySchema');

module.exports = mongoose.model('Activity', activitySchema);