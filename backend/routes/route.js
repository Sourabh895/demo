const express = require('express');
const router = express.Router();
const Song = require('../models/song');


router.get('/songs', async(req, res) => {
    const songs = await Song.find({});
    res.send(songs);
})

router.get('./songs:/id', async(req, res) => {
    const songs = await Song.findById(req.params.id);
    res.send(songs);
})



module.exports = router;