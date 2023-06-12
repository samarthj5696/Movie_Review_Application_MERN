const Actor = require("../model/Actor.js");
const Director = require("../model/Director.js");
const Genre = require("../model/Genre.js");
const Movie = require("../model/Movie.js");
const User = require("../model/User.js");

//post("add_movie")
//Add Movie
const add_movie = async (req, res) => {
  const movie = new Movie({
    Movie_Name: req.body.Movie_Name,
    IMDB_ID: req.body.IMDB_ID,
    Comments: req.body.Comments,
    Rating: req.body.Rating,
    Release_Date: req.body.Release_Date,
    Actor: req.body.Actor,
    Role: req.body.Role,
    Director: req.body.Director,
  });
  const actorId = req.body.Actor;
  const directorId = req.body.Director;

  try {
    const saveProduct = await movie.save();

    for (let i = 0; i < actorId.length; i++) {
      console.log(actorId[i]);
      const actor = await Actor.updateOne(
        { _id: actorId[i] },
        { $push: { Movies: saveProduct._id } }
      );
    }

    for (let i = 0; i < directorId.length; i++) {
      console.log(directorId[i]);
      const director = await Director.updateOne(
        { _id: directorId[i] },
        { $push: { Movies: saveProduct._id } }
      );
    }
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { add_movie };
