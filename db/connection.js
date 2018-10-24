MONGODB_URI = require('dotenv').config()
// requirements: import mongoose
const mongoose = require('mongoose')


// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/the-donut-shop');
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

// export your mongoose connection
module.exports = mongoose