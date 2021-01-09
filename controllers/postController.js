const Post = require("../models/Post");

exports.post_get = (req, res, next) => {
  console.log("req.user post_post=", req.user);
  res.render("post_form", { title: "Post form", user: req.user });
};

exports.post_post = (req, res, next) => {
  const post = new Post({
    user: req.user.id,
    message: req.body.message,
  }).save((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
