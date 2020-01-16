var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var paisSchema = new Schema({ nome: 'string', imagem: 'string'});

module.exports = paisSchema;