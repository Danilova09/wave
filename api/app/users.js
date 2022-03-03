const express = require('express');
const User = require('../models/User');
const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
            token: req.body.token,
        }

        const user = new User(userData);
        user.generateToken();
        await user.save();
        res.send(user);
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

router.post('/track_history', auth ,async (req, res, next) => {
    try {
        return res.send({message: 'Hello, ' + req.user.email});
    } catch (e) {
        next(e);
    }
})



module.exports = router;