const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    song_name: String,

},{
    versionKey: false
})

module.exports= mongoose.model('songs',songSchema);