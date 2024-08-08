const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    imageUrl: String, 
    duration: Number, 
    genre: String,
    releaseDate: Date,
    imdb: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);
