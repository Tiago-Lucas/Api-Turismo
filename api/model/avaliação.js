const mongoose = require('mongoose');

const avaliacaoLugarSchema = mongoose.Schema({
    comentario:{
        type:String,
        require: true,
    },
    Image:{
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('avaliação', avaliacaoLugarSchema);