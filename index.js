const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  // Recipe.create({ 
  //   title: "Chilaquiles",
  //   level: "Easy Peasy",
  //   ingredients: ["totopos","salsa", "queso","crema"],
  //   cuisine: "mexican",
  //   dishType: "main_course",
  //   creator: "dios"
  // })
  // .then((r) => console.log(r))
  // .catch((e) => console.log(e));

  // Recipe.insertMany(data)
  // .then(response => console.log(response))
  // .catch(error => console.log(error))

  // Recipe.updateOne({ name: "Garfield" }, { name: "garfield", age: 5 })
//   .then((cat) => console.log(cat))
//   .catch((e) => console.log(e));

Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100})
.then(response => console.log(response))
.catch(error => console.log(error))

Recipe.deleteOne({title:"Carrot Cake" })
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

  mongoose.connection.close() 