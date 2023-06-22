const { response } = require("express");
const Comment = require("../model/Comment.js");
const Movie = require("../model/Movie.js");
const comment = async (req, res) => {
  const add_comment = new Comment({
    userId: req.body.UserId,
    comment: req.body.Comments,
  });
  try {
    const save_comment = await add_comment.save();
    console.log(save_comment);
    console.log(save_comment._id.toString());
    const update_movie = await Movie.findByIdAndUpdate(
      { _id: req.body.ID },
      { $push: { Comments: save_comment._id.toString() } }
    );
    console.log(update_movie);
    res.json(update_movie);
  } catch (e) {
    res.json(e);
  }
};
const get_comment = async (req, res) => {
  try {
    const comments = await Movie.findById({ _id: req.body.ID })
      .populate("Actor")
      .populate("Director")
      .populate("Genre")
      .populate("Comments");
    const com = await comments.populate({
      path: "Comments",
      populate: {
        path: "userId",
        model: "User",
        select: "username",
      },
    });
    res.json(com);
  } catch (e) {
    res.json(e);
  }
};
module.exports = { comment, get_comment };
