const mongoose = require("mongoose");
const GenreSchema = new mongoose.Schema({
  Type: Array, //array(genre) of array(movies)
});
module.exports = mongoose.model("Genre", GenreSchema);
