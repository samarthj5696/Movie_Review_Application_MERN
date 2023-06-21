const Actor = require("../model/Actor.js");
const Director = require("../model/Director.js");
const Genre = require("../model/Genre.js");
const Movie = require("../model/Movie.js");
const User = require("../model/User.js");

//get("/get_movies")
//Get all movies
const movie_all = async (req, res) => {
  try {
    const movies = await Movie.find()
      .populate("Actor")
      .populate("Director")
      .populate("Genre");
    console.log("get all movies");
    res.json(movies);
  } catch (error) {
    res.json({ message: error });
  }
};

//get("/get_all_movies")
//Get all movies
const get_all_movies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .populate("Actor")
      .populate("Director")
      .populate("Genre");
    console.log("get all movies");
    res.json(movies);
  } catch (error) {
    res.json({ message: error });
  }
};

//get("/get_actor")
//Get all actor information
const get_actor = async (req, res) => {
  try {
    const actor = await Actor.find();
    res.json(actor);
  } catch (e) {
    res.json({ message: e });
  }
};

//get("/get_director")
//Get all actor information
const get_director = async (req, res) => {
  try {
    const director = await Director.find();
    res.json(director);
  } catch (e) {
    res.json({ message: e });
  }
};

//get("/get_genre")
//get all genre
const get_genre = async (req, res) => {
  try {
    const genre = await Genre.find();
    res.json(genre);
  } catch (e) {
    res.json({ message: e });
  }
};

//post("/add_director")
//Add Director
const add_Director = async (req, res) => {
  const director = new Director({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
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

module.exports = {
  movie_all,
  add_actor,
  add_Director,
  add_Genre,
  get_actor,
  get_genre,
  get_director,
  get_all_movies,
};
