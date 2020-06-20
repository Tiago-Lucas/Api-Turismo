const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        trim: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Usuario', usuarioSchema);