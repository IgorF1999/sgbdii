var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var mensagemSchema = Schema({
    _id: { type: objectId, auto: true },
    utilizador: { type: Schema.Types.ObjectId, ref: 'Utilizador'},
    posicao: String,
    jogo: { type: Schema.Types.ObjectId, ref: 'Jogo'}
});

var mensagem = mongoose.model('Mensagem', mensagemSchema, 'mensagem');

module.exports = mensagem;