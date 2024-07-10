const Movies = require('../models/movieData');

module.exports = {
    async create(req, res) {
        const newMovie = Movies.create({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            releaseDate: req.body.releaseDate,
        })

        res.send(newMovie);
    },

    async list(req, res) {
        const movies = await Movies.find();
        res.send(movies)    
    },

    async update(req, res) {

        const movie = await Movies.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            releaseDate: req.body.releaseDate,
        }, {
            new: true
        });
        return res.send(movie)
    },

    async delete(req, res) {
        const movie = await Movies.findByIdAndDelete(req.params.id);
        return res.send(movie)
    }
}