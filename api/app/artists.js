const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const {nanoid} = require('nanoid');
const config = require('../config');
const Artist = require('../models/Artist');
const permit = require("../middleware/permit");
const auth = require("../middleware/auth");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.artistsUploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', async (req, res, next) => {
    try {
        const artists = await Artist.find();
        res.send(artists);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const artist = await Artist.findOne({_id: req.params.id});
        if (!artist) {
            return res.status(404).send({error: 'Artist not found'});
        }
        return res.send(artist);
    } catch (e) {
        next(e);
    }
});

router.post('/', auth, upload.single('image') ,async (req, res, next) => {
    try {
        if (!req.body.name || !req.file || !req.body.info) {
            return res.status(400).send({error: 'Fill in required fields'});
        }
        const artistData = {
            name: req.body.name,
            image: req.file.filename,
            info: req.body.info,
            isPublished: (req.user.role === 'admin'),
        }

        const artist = new Artist(artistData);
        await artist.save();
        return res.send({artist: artist});
    } catch (e) {
        next(e);
    }
});

router.post('/:id/publish', auth, permit('admin'), async (req, res, next) => {
    try {
        const filter = {_id: req.params.id};
        const update = {isPublished: true};
        const updatedArtist = await Artist.findOneAndUpdate(filter, update);
        updatedArtist.save()
        res.send(updatedArtist);
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', auth, permit('admin'), async (req, res, next) => {
    try {
        await Artist.findByIdAndRemove(req.params.id);
        res.send({message: 'Artist deleted'});
    } catch(e) {
        next(e);
    }
})

module.exports = router;