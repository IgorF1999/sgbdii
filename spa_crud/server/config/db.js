var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/test');

module.exports = connection;