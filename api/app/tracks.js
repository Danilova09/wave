const express = require('express');
const Track = require("../models/Track");
const mongoose = require("mongoose");
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const tracks = await Track.find().populate('album');
        res.send(tracks);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const trackData = {
            title: req.body.title,
            album: req.body.album,
            duration: req.body.duration,
        }
        const track = new Track(trackData);
        await track.save();
        res.send(track);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).send(error);
        }
        next(error);
    }
})

module.exports = router;