const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const feedSchema = new Schema({

}, { versionKey: false })

module.exports = mongoose.model('Feed', feedSchema);