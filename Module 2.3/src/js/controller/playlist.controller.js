const { createPlayList, getPlayList, getCountedPlayList } = require('../model/playlist')
const { playCount } = require('../service/playlist.service')
const express = require('express');
const router = express.Router();

router.get("/playlist", (req, res) => {
    const playlists = getPlayList()
    res.send(playlists);
});

router.post("/add-playlist", (req, res) => {
    const { title, artist, url } = req.body;
    createPlayList(title, artist, url);
    res.redirect('/');
});

router.get("/countedPlaylist", (req, res) => {
    const playlists = getCountedPlayList()
    res.send(playlists);
});

router.post("/countSong", (req, res) => {
    const { title, artist } = req.body;
    playCount(title, artist);
    res.redirect('/playlist');
});

router.put("/", (req, res) => {
    res.send("This is PUT response");
});

router.delete("/", (req, res) => {
    res.send("This is DELETE response");
});

router.use((req, res) => {
    res.status(404).send("Page not found");
});

module.exports = router;