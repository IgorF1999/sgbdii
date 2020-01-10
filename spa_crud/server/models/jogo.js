var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var jogoSchema = Schema({
   _id: { type: objectId, auto: true },
   equipa: { type: Schema.Types.ObjectId, ref: 'Equipa'},
   jogador: { type: Schema.Types.ObjectId, ref: 'Jogador'}
});

var jogo = mongoose.model('Jogo', jogoSchema, 'jogo');

module.exports = jogo;