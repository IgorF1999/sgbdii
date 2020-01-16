var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var favoritosSchema = require('./favoritos');

var userSchema = new Schema({
    _id: { type: objectId, auto: true },
    nome: { type: String, required: true },
    favoritoliga: [favoritosSchema],
    favoritoequipa: [favoritosSchema]
}, {
    versionKey: false
});

var user = mongoose.model('User', userSchema, 'users');

module.exports = user;