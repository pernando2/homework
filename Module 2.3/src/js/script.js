fetch("http://localhost:3000/playlist")
    .then((response) => response.json())
    .then((json) => {
        if (json.length === 0) {
            document.getElementById(
                "spotify-playlists"
            ).innerHTML = `<p style="color: whitesmoke;">Belum ada Lagu</p>`;
        } else {
            for (let index = 0; index < json.length; index++) {
                document.getElementById("spotify-playlists").innerHTML += `
                <div class="item">
                    <img src="https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2Fffc9b04c904e0a9c815fd4e923594974.1000x1000x1.jpg" />
                    <div class="play">
                        <span class="fa fa-play" onclick="playSong('${json[index].url}', '${json[index].title}', '${json[index].artist}')"></span>
                    </div>
                    <h4>${json[index].title} - ${json[index].artist}</h4>
                    <p>Lagu Diputar ${json[index].count} Kali </p>
                </div>`;
            }
        }
        // console.log(json);
    });

// Get the modal
var modal = document.getElementById("addSong");

// Get the button that opens the modal
var btn = document.getElementById("addModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const audioPlayer = document.getElementById("audioPlayer");
let countSong = [];
let playCount = 0;

function playSong(songPath, songName, songArtist) {
    document.getElementById("titlePlayedSong").innerHTML = songName;
    document.getElementById("artistPlayedSong").innerHTML = songArtist;
    incrementPlayCount(songName, songArtist);
    audioPlayer.src = songPath;
    audioPlayer.play();
    getMostPlayedSong();
}

function incrementPlayCount(title, artist) {
    fetch("/countSong", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, artist }),
    })
        .then((response) => response.text())
        .then((data) => "");
}
let dataFetched = false;
let mostPlayedSongs = document.getElementById("mostPlayedSongs");
function getMostPlayedSong() {
    if (dataFetched) {
        while (mostPlayedSongs.firstChild) {
            mostPlayedSongs.removeChild(mostPlayedSongs.firstChild);
        }
    }
    // fetch("http://localhost:3000/countedPlaylist")
    //     .then((response) => response.json())
    //     .then((json) => {
    //         dataFetched = true;
    //         if (json.length === 0) {
    //             document.getElementById(
    //                 "mostPlayedSongs"
    //             ).innerHTML = `<p style="color: whitesmoke;">Belum ada Lagu sering didengar</p>`;
    //         } else {
    //             for (let index = 0; index < json.length; index++) {
    //                 let htmlCard = `<div class="item " id="mostPlayedSong">
    //                 <img src="https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2Fffc9b04c904e0a9c815fd4e923594974.1000x1000x1.jpg" />
    //                 <div class="play">
    //                 <span class="fa fa-play" onclick="playSong('${json[index].url}', '${json[index].title}', '${json[index].artist}')"></span>
    //                 </div>
    //                 <h4>${json[index].title} - ${json[index].artist}</h4>
    //                 <p>Lagu Diputar ${json[index].count} Kali </p>
    //                 </div>`;
    //                 document.getElementById("mostPlayedSongs").innerHTML += htmlCard;
    //                 // document.getElementById('mostPlayedSong').remove();
    //             }
    //         }
    //         console.log(json);
    //     });
}
