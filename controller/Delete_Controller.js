const { response } = require("express");
const Actor = require("../model/Actor.js");
const Director = require("../model/Director.js");
const Genre = require("../model/Genre.js");
const Movie = require("../model/Movie.js");
const User = require("../model/User.js");

const delete_movie = async (req, res) => {
  try {
    const Delete_movie = await Movie.findByIdAndDelete(req.params.id);
    res.json(Delete_movie);
  } catch (e) {
    res.json(e);
  }
};

const delete_actor = async (req, res) => {
  try {
    console.log(req.params.id);
    const movies = await Movie.find({ Actor: { $in: req.params.id } });
    for (let i = 0; i < movies.length; i++) {
      const index = movies[i].Actor.indexOf(req.params.id);
      const x = movies[i].Actor.splice(index, 1);
      const response = await movies[i].save();
    }
    console.log(movies);
    res.json(movies);
  } catch (e) {
    res.json(e);
  }
};

const delete_director = async (req, res) => {
  try {
    console.log(req.params.id);
    const movies = await Movie.find({ Director: { $in: req.params.id } });
    for (let i = 0; i < movies.length; i++) {
      const index = movies[i].Director.indexOf(req.params.id);
      const x = movies[i].Director.splice(index, 1);
      const response = await movies[i].save();
    }
    console.log(movies);
    res.json(movies);
  } catch (e) {
    res.json(e);
  }
};

const delete_genre = async (req, res) => {
  try {
    console.log(req.params.id);
    const movies = await Movie.find({ Genre: { $in: req.params.id } });
    for (let i = 0; i < movies.length; i++) {
      const index = movies[i].Genre.indexOf(req.params.id);
      const x = movies[i].Genre.splice(index, 1);
      const response = await movies[i].save();
    }
    console.log(movies);
    res.json(movies);
  } catch (e) {
    res.json(e);
  }
};

module.exports = { delete_actor, delete_director, delete_genre, delete_movie };
