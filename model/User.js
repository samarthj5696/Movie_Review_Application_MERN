const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Email: String,
});
module.exports = mongoose.model("User", UserSchema);
