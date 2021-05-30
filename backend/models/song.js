const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    imgUrl: {
        type: String, 
    },
    artist: {
        type: String,
    },
    content: {
        type: String, 
    },
    audio : {
        type: String
    }
})


const song = mongoose.model('Song', songSchema);

module.exports= song;