// Created by Pernando GG3FSGP0467

use mySongsFirst // To make a database songs

// to insert data to songs collection
db.songs.insertMany([
    { "title": "Loneliness", "artist": "Putri Airiani", "Album": "" },
    { "title": "Angels like you", "artist": "Miley Crush", "Album": "Plastic Hearts" },
    { "title": "Life Could Be A Dream", "artist": "Street Corner Renaissance", "Album": "Little Maiden" },
    { "title": "Human", "artist": "Rag n Bone Man", "Album": "Human" },
    { "title": "Dog Days Are Over", "artist": "Florence and The Machine", "Album": "Lungs" },
    { "title": "Someone You Loved", "artist": "Lewis Capaldi", "Album": "Divinely Uninspired to a Hellish Extent" },
    { "title": "Let Her Go", "artist": "Passenger", "Album": "All the Little Lights" },
    { "title": "Grenade", "artist": "Bruno Mars", "Album": "Grenade" },
    { "title": "It Will Rain", "artist": "Bruno Mars", "Album": "Human" },
    { "title": "When i Was Your Man", "artist": "Bruno Mars", "Album": "Unorthodox Jukebox" }
])

// to insert data to artists collection
db.artists.insertMany([
    { "name": "Putri Airiani", "date of birth": "31 Desember 2005", "genre": "Jazz" },
    { "name": "Miley Crush", "date of birth": "November 23, 1992", "genre": "Pop" },
    { "name": "Street Corner Renaissance", "date of birth": "2005", "genre": ["Doo-Wop", "Pop", "Rhythm and Blues"] },
    { "name": "Rag n Bone Man", "date of birth": "29 January 1985", "genre": ["Soul", "Alternative Rock"] },
    { "name": "Florence and The Machine", "date of birth": "2007", "genre": "Alternative/Indie" },
    { "name": "Lewis Capaldi", "date of birth": "7 October 1996", "genre": ["Alternative/Indie", "Pop"] },
    { "name": "Passenger", "date of birth": "17 May 1984", "genre": ["Folk Rock", "Soft Rock"] },
    { "name": "Bruno Mars", "date of birth": "October 8, 1985", "genre": ["Pop Music", "Reggae", "Power Pop"] },
    { "name": "Bruno Mars", "date of birth": "October 8, 1985", "genre": "Pop pop-soul" },
    { "name": "Bruno Mars", "date of birth": "October 8, 1985", "genre": ["Pop", "Pop Music","Reggae"] }
])

// to insert data to popularSongs collection
db.popularSongs.insertMany([
    { "title": "Loneliness", "playCount": 1500, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Angels like you", "playCount": 1000, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Life Could Be A Dream", "playCount": 1200, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Human", "playCount": 2000, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Dog Days Are Over", "playCount": 1350, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Someone You Loved", "playCount": 2500, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Let Her Go", "playCount": 3000, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "Grenade", "playCount": 2200, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "It Will Rain", "playCount": 2253, "Periode": "01/jan/23 - 31/jan/23" },
    { "title": "When i Was Your Man", "playCount": 2700, "Periode": "01/jan/23 - 31/jan/23" }
])