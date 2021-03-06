const express = require('express');
const Track = require("../models/Track");
const mongoose = require("mongoose");
const Album = require("../models/Album");
const auth = require("../middleware/auth");
const permit = require("../middleware/permit");
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        if (req.query.album) {
            const tracksByAlbum = await Track.find({album: req.query.album}).populate('album');
            return res.send(tracksByAlbum);
        }
        const tracks = await Track.find().populate('album');
        return res.send(tracks);
    } catch (e) {
        next(e);
    }
});

router.post('/',  auth, async (req, res, next) => {
    try {
        const trackData = {
            title: req.body.title,
            album: req.body.album,
            duration: req.body.duration,
            isPublished: (req.user.role === 'admin'),
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
});

router.get('/byAlbum/:albumID', async (req, res, next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.albumID)) {
            return res.send({error: `Album with id=${req.params.albumID} is invalid`});
        }

        const album = await Album.findById(req.params.albumID).populate('artist');

        if (!album) {
            return res.status(404).send({error: `Album with id=${req.params.albumID} not found`});
        }
        const tracks = await Track.find({album: req.params.albumID});

        const albumData = JSON.parse((JSON.stringify(album)));
        const albumInfo = {...albumData, artist: albumData.artist._id};

        const tracksByAlbum = {
            artist: albumData.artist,
            album:  albumInfo,
            tracks,
        }
        return res.send(tracksByAlbum);
    } catch (e) {
        next(e);
    }
})

router.post('/:id/publish', auth, permit('admin'), async (req, res, next) => {
    try {
        const filter = {_id: req.params.id};
        const update = {isPublished: true};
        const updatedTrack= await Track.findOneAndUpdate(filter, update);
        updatedTrack.save();
        res.send(updatedTrack);
    } catch (e) {
        next(e);
    }
});

router.delete('/:id', auth, permit('admin'), async (req, res, next) => {
    try {
        const track = await Track.findById(req.params.id);
        track.deleteOne();
        res.send(track);
    } catch(e) {
        next(e);
    }
});

module.exports = router;