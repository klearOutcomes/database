var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
  test: Object,
  id: String

})

var database = mongoose.model('database', dataSchema);

module.exports = database;
