
var mongoose = require('mongoose');
var database = require('./testdatabase.js');

mongoose.connect('mongodb://localhost/company', function(err) {
    if (err) console.log(err);
    else console.log("connected to database!");
});

database.remove({}, function(err) {
    if (err) throw err;

})
