const { createPlayList, getPlayList, getCountedPlayList } = require('../model/playlist')
let song;
function playCount(title, artist) {
  song = getPlayList().find(song => song.title === title && song.artist === artist);
  let indexsong = getPlayList().findIndex(song => song.title === title && song.artist === artist);
  if (song) {
    song.count++;
  }
  getPlayList()[indexsong] = song;
}

module.exports = {
    playCount
}