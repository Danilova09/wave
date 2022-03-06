const express = require('express');
const multer = require('multer');
const {nanoid} = require('nanoid');
const path = require('path');
const User = require('../models/User');
const mongoose = require("mongoose");
const config = require('../config');
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.avatarsUploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


router.post('/', upload.single('avatar') ,async (req, res, next) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
            displayName: req.body.displayName,
        }

        if (req.file) {
            userData.avatar = req.file.filename;
        } else {
            userData.avatar = null;
        }

        console.log(userData);
        const user = new User(userData);
        user.generateToken();
        await user.save();
        res.send({user});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).send(error);
        }
        next(error);
    }
});

router.post('/sessions', async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(400).send({error: 'Email not found'});
        }
        const isMatch = await user.checkPassword(req.body.password);

        if (!isMatch) {
            return res.status(400).send({error: 'Password is wrong'});
        }
        user.generateToken();
        await user.save();
        return res.send({token: user.token});
    } catch (e) {
        next(e);
    }
});

module.exports = router;