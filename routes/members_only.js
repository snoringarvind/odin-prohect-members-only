const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const postController = require("../controllers/postController");
const indexController = require("../controllers/indexController");
const logoutController = require("../controllers/logoutController");

const isAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

const isUnAuth = (req, res, next) => {
  if (req.user == undefined) {
    next();
  } else {
    res.redirect("/");
  }
};

router.get("/logout", logoutController.logout);

router.get("/", indexController.index);

router.get("/login", isUnAuth, loginController.login_get);

router.post("/login", loginController.login_post);

router.get("/signup", isUnAuth, signupController.signup_get);

router.post("/signup", signupController.signup_post);

router.get("/create/post", isAuth, postController.post_get);

router.post("/create/post", postController.post_post);

module.exports = router;
