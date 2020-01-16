var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb+srv://Igor:mongodb19@cluster0-lbdrn.mongodb.net/test?retryWrites=true&w=majority');

module.exports = connection;