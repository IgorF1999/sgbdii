var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var equipasSchema = Schema({
    _id: { type: objectId, auto: true },
    nome: String,
    ligas: { type: Schema.Types.ObjectId, ref: 'Ligas'},
});

var equipas = mongoose.model('Equipa', equipasSchema, 'equipas');

module.exports = equipas;