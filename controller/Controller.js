const Movie = require("../model/Movie.js");
const Actor = require("../model/Actor.js");
const Director = require("../model/Director.js");
const Genre = require("../model/Genre.js");
const Movies = require("../model/Movie.js");
const User = require("../model/User.js");

//Get all movies
const movie_all = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(Movies);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add Actor
//Add Director
//Add Genre
//Add Movie

//Add Actor
// //Add new product
// const add_product = async (req, res) => {
//   const product = new Product({
//     title: req.body.title,
//     price: req.body.price,
//     image: req.body.image,
//     details: req.body.details,
//   });
//   try {
//     const saveProduct = await product.save();
//     res.send(saveProduct);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

module.exports = { movie_all };
