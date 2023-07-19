const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const { createPlayList, getPlayList, getCountedPlayList } = require('./src/js/model/playlist')
const router = require('./src/js/controller/playlist.controller')
// const songlist = require("./listSongs.json");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/src')));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index3.html"));
});
app.use('/', router);




app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});
