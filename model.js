const mongoose = require('./dbconnection.js');

const DataSchema = new mongoose.Schema({
  nname: String,
  gender: String
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
