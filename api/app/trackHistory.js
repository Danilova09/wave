const express = require('express');
const auth = require("../middleware/auth");
const TrackHistory = require('../models/TrackHistory');
const Track = require("../models/Track");
const mongoose = require('mongoose');
const router = express.Router();



router.get('/', auth, async (req, res, next) => {
    try {
        const trackHistory = await TrackHistory.find({user: req.user._id}).populate('track');
        return res.send(trackHistory);
    } catch (error) {
        next(error);
    }
})


router.post('/', auth, async (req, res, next) => {
    try {
        if (!req.body.track) {
            return res.status(400).send({error: 'Id of track is required'});
        }
        if (!mongoose.Types.ObjectId.isValid(req.body.track)) {
            return res.status(400).send({error: `Track with id=${req.body.track} is invalid!`});
        }

        const track = await Track.findById(req.body.track);
        if (!track) {
            return res.status(400).send({error: `Track with id=${req.body.track} not found!`});
        }

        const trackHistoryData = {
            track: req.body.track,
            user: req.user._id,
            datetime: new Date().toTimeString(),
        }
        const trackHistory = new TrackHistory(trackHistoryData);
        trackHistory.save();
        return res.send({trackHistory});
    } catch (error) {
        next(error);
    }
})

module.exports = router;
