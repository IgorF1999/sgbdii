var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var historiaSchema = Schema({
    titulo: String,
    pessoa: String,
    pessoa: { type: Schema.Types.ObjectId, ref: 'Pessoa' }
});

var historia = mongoose.model('Historia', historiaSchema, 'historia');

module.exports = historia;