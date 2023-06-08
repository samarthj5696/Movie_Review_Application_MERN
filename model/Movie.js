const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  Movie_Name: String,
  IMDB_ID: String,
  Comments: Array,
  Rating: Number,
  Release_Date: Date,
  Actor: Array,
  Director: Array,
});
module.exports = mongoose.model("Movie", MovieSchema);
