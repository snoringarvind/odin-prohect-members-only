exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/members-only");
};
