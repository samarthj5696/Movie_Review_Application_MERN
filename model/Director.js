const mongoose = require("mongoose");
const DirectorSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
});
module.exports = mongoose.model("Director", DirectorSchema);
