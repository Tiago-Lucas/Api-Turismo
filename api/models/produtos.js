const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Nome : String,
    email: String,
    nascimento: String,
    senha: Number,
    sexo: String
});

module.exports = mongoose.model('Produto', produtoSchema);