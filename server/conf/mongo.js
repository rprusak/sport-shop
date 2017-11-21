const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// mongodb connection options
const options = {
  useMongoClient: true
};
mongoose.connect('mongodb://localhost/sport-shop', options).then(() => {
  console.log("Successfully connected to database.");
}, error => {
  console.error(error.message);
  process.exit();
});
