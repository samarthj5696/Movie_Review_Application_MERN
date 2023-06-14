const mongoose = require("mongoose");
const GenreSchema = new mongoose.Schema({
  Type: String,
});
module.exports = mongoose.model("Genre", GenreSchema);
