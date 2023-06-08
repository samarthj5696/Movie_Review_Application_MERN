const mongoose = require("mongoose");
const DirectorSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Director_ID: String,
  Movies: Array,
});
module.exports = mongoose.model("Director", DirectorSchema);
