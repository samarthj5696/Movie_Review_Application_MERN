const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  Movie_Name: { type: String, required: true },
  IMDB_ID: { type: String, required: true },
  Comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  Rating: Number,
  Actor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  Director: [{ type: mongoose.Schema.Types.ObjectId, ref: "Director" }],
  Genre: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
});
module.exports = mongoose.model("Movie", MovieSchema);
