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
    {name: 'Music', sortOrder: 60},
  ]);

  await Activity.deleteMany({});
  const activities = await Activity.create([
    {name: 'NYC', description: 'Visit sites where Jimi Hendrix and Bob Dylan first performed or check out Central Park', category: categories[0], duration: 120},
    {name: 'London', description: 'Visit sites such my boyhood home in the city where Mick and Keith first met', category: categories[0], duration: 180},
    {name: 'Product Mangement', description: 'we can chat about how to build an MVP, or the pitfalls of waterfall.', category: categories[1], duration: 45},
    {name: 'Software Engineering', description: 'MERN stacks 101 to Python and Django', category: categories[1], duration: 60},
    {name: 'Jogging', description: 'a jog is a slow run which includes conversations of our choosing', category: categories[2], duration: 30},
    {name: 'Cycling', description: 'spandex optional', category: categories[2], duration: 60},
    {name: 'Tour of local breweries', description: 'pretzels will help', category: categories[3], duration: 180},
    {name: 'Surfing on Long Island', description: 'the sharks are harmless', category: categories[3], duration: 240},
    {name: 'Underwater basket weaving', description: 'a classic hobby', category: categories[4], duration: 60},
    {name: 'Existential discussion', description: 'what does it all mean?', category: categories[4], duration: 90},
    {name: 'Existential discussion 2', description: 'if you kids want to blow your mind I will try to explain the Terminator timeline regarding John Connor and his father', category: categories[4], duration: 240},
    {name: 'Watch Every Which Way But Loose together', description: 'the Clint Eastwood vehicle with the orangutan', category: categories[4], duration: 114},
    {name: 'Listen to Black Sunday by Cypress Hill', description: 'discuss this great 1993 album', category: categories[5], duration: 60},
    {name: 'Listen to random assortment of songs by Three Dog Night', description: 'discuss our surprise at not knowing that song was by Three Dog Night', category: categories[5], duration: 60},
  ]);

  console.log(activities)

  process.exit();
})();