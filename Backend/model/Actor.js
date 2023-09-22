const mongoose = require("mongoose");
const ActorSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
});
module.exports = mongoose.model("Actor", ActorSchema);
