const Movie = require("../model/Movie.js");

//post("add_movie")
//Add Movie
const add_movie = async (req, res) => {
  const movie = new Movie({
    Movie_Name: req.body.Movie_Name,
    IMDB_ID: req.body.IMDB_ID,
    Comments: req.body.Comments,
    Rating: req.body.Rating,
    Actor: req.body.Actor,
    Director: req.body.Director,
    Genre: req.body.Genre,
  });

  try {
    const saveProduct = await movie.save();
    console.log("saveProduct", saveProduct);
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { add_movie };
