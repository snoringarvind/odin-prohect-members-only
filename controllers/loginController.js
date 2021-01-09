const passport = require("passport");

exports.login_get = (req, res, next) => {
  res.render("login_form", { title: "Login Page", user: req.user });
};

exports.login_post = [
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/members-only/login",
  }),
];
