const Schema = require('mongoose').Schema;

const activitySchema = new Schema({
  name: { type: String, required: true },
  description: String, 
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  duration: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = activitySchema;