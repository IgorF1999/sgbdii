var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var paisSchema = require('./pais');

var ligasSchema = Schema({
    _id: { type: objectId, auto: true },
    nome: String,
    pais: [paisSchema]
});

var ligas = mongoose.model('Ligas', ligasSchema, 'ligas');

module.exports = ligas;