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
    const Delete_movie = await Movie.findByIdAndDelete(req.params.id);
    res.json(Delete_movie);
  } catch (e) {
    res.json(e);
  }
};

const delete_director = async (req, res) => {
  try {
    const Delete_movie = await Movie.findByIdAndDelete(req.params.id);
    res.json(Delete_movie);
  } catch (e) {
    res.json(e);
  }
};

const delete_genre = async (req, res) => {
  try {
    const Delete_movie = await Movie.findByIdAndDelete(req.params.id);
    res.json(Delete_movie);
  } catch (e) {
    res.json(e);
  }
};

module.exports = { delete_actor, delete_director, delete_genre, delete_movie };
