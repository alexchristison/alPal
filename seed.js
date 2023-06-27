require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Activity = require('./models/activity');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Guided Tours', sortOrder: 10},
    {name: 'Professional Convos', sortOrder: 20},
    {name: 'Exercise', sortOrder: 30},
    {name: 'Excursions', sortOrder: 40},
    {name: 'Random', sortOrder: 50},
  ]);

  await Activity.deleteMany({});
  const activities = await Activity.create([
    {name: 'NYC', desciption: 'see the town where I have lived since college exploring neighborhoods of your choice on foot. I can show you where Spike Lee shot scenes for his early movies, or where John Lennon lived.', category: categories[0], duration: 120},
    {name: 'London', desciption: 'I can show you the town where I came of age. We can visit pubs, watch football/soccer, or see where Mick and Keith met', category: categories[0], duration: 180},
    {name: 'Product Mangement', description: 'we can chat about how to build an MVP, or the pitfalls of waterfall.', category: categories[1], duration: 45},
    {name: 'Software Engineering', description: 'if you have a lot of experience you will likely be teaching me, or if you are a novice I can share my experience as someone new to software engineering', category: categories[1], duration: 60},
    {name: 'Jogging', description: 'not quite running.. we can jog and chat about topics of our choosing', category: categories[2], duration: 30},
    {name: 'Cycling', desciption: 'spandex optional', category: categories[2], duration: 60},
    {name: 'Tour of local breweries', description: 'pretzels will help', category: categories[3], duration: 180},
    {name: 'Surfing on Long Island', description: 'the sharks are harmless', category: categories[4], duration: 240},
    {name: 'Underwater basket weaving', description: 'a classic hobby', category: categories[4], duration: 60},
    {name: 'Existential discussion', description: 'what does it all mean?', category: categories[4], duration: 90},
  ]);

  console.log(activities)

  process.exit();
})();