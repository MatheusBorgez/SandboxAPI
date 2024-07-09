const express = require('express')
const mongoose = require('mongoose');

const app = express()

const Movie = mongoose.model('Movie', { 
    title: String, 
    description: String, 
    imageUrl: String, 
    duration: Number, 
    releaseDate: Date
});

const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies)
})

app.post("/", async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        releaseDate: req.body.releaseDate,
    });

    await movie.save();
    res.send(movie);
})

app.delete("/:id", async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    return res.send(movie)
})

app.put("/:id", async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        releaseDate: req.body.releaseDate,
    }, {
        new: true
    });
    return res.send(movie)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://matheusab594:GqZLVK0dG4St89Dm@sandboxapi.pn8fkns.mongodb.net/?retryWrites=true&w=majority&appName=SandboxAPI');
  console.log(`Example app listening on port ${port}`)
})