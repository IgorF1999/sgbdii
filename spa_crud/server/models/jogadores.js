var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var jogadoresSchema = Schema({
    _id: { type: objectId, auto: true },
    nome: String,
    equipa: { type: Schema.Types.ObjectId, ref: 'Equipas'},
    posicao: String
});

var jogadores = mongoose.model('Jogador', jogadoresSchema, 'jogadores');

module.exports = jogadores;