const mongoose = require("mongoose");
// How to create a model
// Step 1 :require mongoose
// Step 2 :Create a mongoose schema (structure of a user)
// Step 3 : Create a model

const PlaylistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // 1. Playlist mein songs kaunse hain
    // 2. Playlist collaborators
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
        },
    ],
    collaborators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const PlaylistModel = mongoose.model("Playlist", PlaylistSchema );

module.exports = PlaylistModel;