var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var favoritosSchema = new Schema({ ligas: 'string', equipas: 'string'});

module.exports = favoritosSchema;