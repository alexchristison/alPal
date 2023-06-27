// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Activity = require('./models/activity');
const Category = require('./models/category');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, activity, category, order;
let users, activities, categories, orders;
