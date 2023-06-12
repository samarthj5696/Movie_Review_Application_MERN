const Actor = require("../model/Actor.js");
const Director = require("../model/Director.js");
const Genre = require("../model/Genre.js");
const Movies = require("../model/Movie.js");
const Movie = require("../model/Movie.js");
const User = require("../model/User.js");

//Get all movies
const movie_all = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add Director
const add_Director = async (req, res) => {
  const director = new Director({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Movies: req.body.Movies,
  });
  try {
    const saveProduct = await director.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Add Genre
const add_Genre = async (req, res) => {
  const genre = new Genre({
    Type: req.body.Type,
  });
  console.log(genre);
  try {
    const saveProduct = await genre.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Add Movie
const add_Movie = async (req, res) => {
  const movie = new Movie({
    Movie_Name: req.body.Movie_Name,
    IMDB_ID: req.body.IMDB_ID,
    Comments: req.body.Comments,
    Rating: req.body.Rating,
    Release_Date: req.body.Release_Date,
    Actor: req.body.Actor,
    Director: req.body.Director,
  });
  try {
    const saveProduct = await movie.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Add Actor
const add_actor = async (req, res) => {
  const actor = new Actor({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Movies: req.body.Movies,
    Role: req.body.Role,
  });
  try {
    const saveProduct = await actor.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { movie_all, add_actor, add_Director, add_Genre, add_Movie };
