const Movies = require('../models/movieData');

module.exports = {
    async create(req, res) {
        const newMovie = Movies.create({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            releaseDate: req.body.releaseDate,
            genre: req.body.genre,
            imdb: req.body.imdb
        })

        res.send(newMovie);
        console.log(newMovie)
    },

    async list(req, res) {
        if (req.params.id != undefined) {
            const movie = await Movies.findById(req.params.id);
            console.log(movie)            
            return res.send(movie)
        }
        const movies = await Movies.find();
        console.log(movies)
        return res.send(movies)    
    },

    async update(req, res) {

        const movie = await Movies.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            releaseDate: req.body.releaseDate,
            genre: req.body.genre,
            imdb: req.body.imdb,
        }, {
            new: true
        });
        console.log(movie)
        return res.send(movie)
    },

    async delete(req, res) {
        const movie = await Movies.findByIdAndDelete(req.params.id);
        console.log(movie)
        return res.send(movie)
    }
}