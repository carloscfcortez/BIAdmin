const express = require('express');

const Connection = require('../models/Connection');

const router = express.Router();


router.post('/save', async (req, res) => {

    const { email } = req.body;

    try {

        // if (await Connection.findOne({ email }))
        //     return res.status(400).send({ error: 'Connection already exists' });

        const connection = await Connection.create(req.body);

        connection.password = undefined;

        return res.send({ connection })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});


router.get('/get', async (req, res) => {
 
 
    try {
        const connection = await Connection.find(req.query);

        return res.send({ connection })
    } catch (err) {
        return res.status(400).send({ error: 'Get Failed' });
    }
});


module.exports = app => app.use('/auth', router);
