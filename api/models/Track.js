const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema= new mongoose.Schema({
    title:  {
        type: String,
        required: true,
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});

const Track = new mongoose.model('Track', TrackSchema);

module.exports = Track;