const mongoose = require("mongoose");
const ActorSchema = new mongoose.Schema({
  Actor_ID: String,
  First_Name: String,
  Last_Name: String,
  Gender: String,
  Movies: Array,
  Role: String,
});
module.exports = mongoose.model("Actor", ActorSchema);
