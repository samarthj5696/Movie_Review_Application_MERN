const mongoose = require("mongoose");
const Comment = new mongoose.Schema({
  userId: String,
  comment: String,
});
module.exports = mongoose.model("Comment", Comment);
