const Actor = require("../model/Actor.js");
const Director = require("../model/Director.js");
const Genre = require("../model/Genre.js");
const Movie = require("../model/Movie.js");
const User = require("../model/User.js");

//get("/")
//Get all movies
const movie_all = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.json({ message: error });
  }
};

//post("/add_director")
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

//post("add_genre")
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

//post("add_actor")
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

//Add comment

//Add_movie
// const add_movie = require("./Add_movie.js");

module.exports = { movie_all, add_actor, add_Director, add_Genre };
