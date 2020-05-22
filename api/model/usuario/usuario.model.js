const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const usuarioSchema = new Schema({

}, { versionKey: false })

module.exports = mongoose.model('Usuario', usuarioSchema);