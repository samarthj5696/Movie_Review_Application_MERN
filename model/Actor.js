const mongoose = require("mongoose");
const ActorSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Movies: Array,
  Role: Array,
});
module.exports = mongoose.model("Actor", ActorSchema);
