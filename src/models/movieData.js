const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    imageUrl: String, 
    duration: Number, 
    releaseDate: Date
});

module.exports = mongoose.model('Movie', MovieSchema);
