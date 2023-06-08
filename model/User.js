const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Comment: Array,
  Rating: Array,
  Email: String,
});
module.exports = mongoose.model("User", UserSchema);
