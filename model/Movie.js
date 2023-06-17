const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  Movie_Name: String,
  IMDB_ID: String,
  Comments: Array,
  Rating: Number,
  Actor: Array,
  Director: Array,
  Genre: Array,
});
module.exports = mongoose.model("Movie", MovieSchema);
