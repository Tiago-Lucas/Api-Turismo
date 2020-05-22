const mongoose = require('mongoose');

const cadastroSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome : String,
    email: String,
    nascimento: String,
    senha: String,
    sexo: String
});

module.exports = mongoose.model('cadastro', cadastroSchema);