const mongoose = require('mongoose');
const Song = require('./models/song');


const songs = [
    {
        id:  1,
        title: "Homeroad",
        imgUrl: "https://images.unsplash.com/photo-1598387180906-5496d8ee0f3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: "Taya",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_09_-_Homeroad.mp3"
    },
    {
        id:  2,
        title: "Interception",
        imgUrl: "https://images.unsplash.com/photo-1598386860556-41d5f7996472?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: "Sam",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Interception.mp3"
    },
    {
        id:  3,
        title: "Sentinel",
        imgUrl: "https://images.unsplash.com/photo-1553236152-72dd67ab92ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: "White",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3"
    },
    {
        id:  4,
        title: "Great Expectations",
        imgUrl: "https://images.unsplash.com/photo-1566842937027-437d91739e89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        artist: "Gayatri",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_05_-_Great_Expectations.mp3"
    },
    {
        id:  5,
        title: "Augmentations",
        imgUrl: "https://images.unsplash.com/photo-1495434786667-8d322ec659f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: 'Pointing',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_01_-_Augmentations.mp3" 
    },
    {
        id:  6,
        title: "Cabaret",
        imgUrl: "https://images.unsplash.com/photo-1595491542937-3de00ac7e08a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: "Kane",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_10_-_Cabaret.mp3"
    },
    {
        id: 7,
        title: "Contention",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgUrl: "https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29uZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: "Bob",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_03_-_Contention.mp3",
    },
    {
        id: 8,
        title: "Dark Alleys",
        imgUrl: "https://images.unsplash.com/photo-1553406624-52e5fb326413?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        artist: "Rock",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        audio: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_06_-_Dark_Alleys.mp3"
    }

]




const seedDB = async()=> {
    await Song.insertMany(songs)
    console.log("DB Seeded")
}


module.exports = seedDB;