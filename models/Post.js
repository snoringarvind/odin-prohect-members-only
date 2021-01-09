const mongoose = require("mongoose");
const connection = require("../config/database");

const PostSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Post = connection.model("Post", PostSchema);

module.exports = Post;
