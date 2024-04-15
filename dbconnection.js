const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://drmzay12:<password>@cluster.limgjhg.mongodb.net/';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
