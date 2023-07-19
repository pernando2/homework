let playlists = [];

function createPlayList(title, artist, url) {
  const playlist = {
    title: title,
    artist: artist,
    url: url,
    count: 0,
  };
  // console.log(playlist)
  playlists.push(playlist);
}
function getPlayList() {
  return playlists;
}



function getCountedPlayList() {
  playlists.sort((a, b) => b.count - a.count);
  return playlists;
}

module.exports = {
  createPlayList,
  getPlayList,
  getCountedPlayList
};