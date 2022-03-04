const express = require('express');
const User = require('../models/User');
const mongoose = require("mongoose");
const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        }

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