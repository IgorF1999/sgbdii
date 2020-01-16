var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb+srv://Alexandre:1234@cluster0-l2ajk.mongodb.net/Resultados?retryWrites=true&w=majority');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!")
});

module.exports = connection;