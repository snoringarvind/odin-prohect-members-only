const Post = require("../models/Post");

exports.index = (req, res, next) => {
  Post.find({})
    .populate("user")
    .exec((err, result) => {
      console.log("result", result);
      console.log("req.user=", req.user);
      if (err) return next(err);
      if (result == null) {
        res.redirect("/members-only/create/post");
      } else {
        res.render("index", {
          title: "Home Page",
          user: req.user,
          posts: result,
        });
      }
    });
};
