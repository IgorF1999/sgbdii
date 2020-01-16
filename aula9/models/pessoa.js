var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var moradaSchema = require('./morada');

var pessoaSchema = new Schema({
    id: { type: objectId, auto: true },
    nome: { type: String, required: true },
    apelido: { type: String },
    numtelemovel: { type: String },
    morada: moradaSchema,
    data_de_nascimento: { type: Date, default: Date.now },
}, {
    versionKey:false
});

var pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = pessoa;