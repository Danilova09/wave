const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const {nanoid} = require('nanoid');
const config = require('../config');
const Artist = require('../models/Artist');


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

router.post('/', upload.single('image') ,async (req, res, next) => {
    try {
        if (!req.body.name || !req.file || !req.body.info) {
            return res.status(400).send({error: 'Fill in required fields'});
        }
        const artistData = {
            _id: req.body.id,
            name: req.body.name,
            image: req.file.filename,
            info: req.body.info,
        }

        const artist = new Artist(artistData);
        await artist.save();
        return res.send({artist: artist});
    } catch (e) {
        next(e);
    }
});

module.exports = router;