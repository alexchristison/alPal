const Activity = require('../../models/activity');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const activities = await Activity.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
  // activities.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(activities);
  console.log("activities in controller", activities)
}

async function show(req, res) {
  const activity = await Activity.findById(req.params.id);
  res.json(activity);
}