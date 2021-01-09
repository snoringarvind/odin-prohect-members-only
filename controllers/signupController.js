const User = require("../models/User");

exports.signup_get = (req, res, next) => {
  res.render("signup_form", { title: "Signup Page", user: req.user });
};

exports.signup_post = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    fname: req.body.fname,
    lname: req.body.lname,
    password: req.body.password,
  }).save((err) => {
    if (err) return next(err);
    res.redirect("/members-only/login");
  });
};
