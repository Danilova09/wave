const express = require('express');
const path = require('path');
const {nanoid} = require('nanoid');
const multer = require('multer');
const config = require('../config');
const Album = require("../models/Album");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.albumsUploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', async (req, res, next) => {
    try {
        if (req.query.artist) {
            const artistsAlbums = await Album.find({artist: req.query.artist});
            return res.send(artistsAlbums) ;
        }
        const albums = await Album.find().populate('artist', 'name info image');
        res.send(albums);
    } catch (e) {
        next(e);
    }
});

router.post('/', upload.single('image'), async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.artist || !req.file || !req.body.releaseDate) {
            return res.status(400).send({error: 'Fill in required fields'});
        }
        const albumData = {
            artist: req.body.artist,
            title: req.body.title,
            releaseDate: req.body.releaseDate,
            image: req.file.filename,
        }
        const album = new Album(albumData);
        await album.save();
        return res.send({album});
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const album = await Album.findById(req.params.id).populate('artist', 'name info image');
        if (!album) {
            return res.status(404).send({error: 'Album not found'});
        }
        return res.send(album);
    } catch (e) {
        next(e);
    }
});

module.exports = router;