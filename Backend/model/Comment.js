const mongoose = require("mongoose");
const Comment = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment: String,
});
module.exports = mongoose.model("Comment", Comment);
