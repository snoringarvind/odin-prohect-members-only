const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

exports.passport_local = (passport) => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log("username=", username);
      console.log("password=", password);
      User.findOne({ username: username }, (err, result) => {
        console.log("result=", result);
        if (err) return done(err);
        if (result == null) {
          return done(null, false, { msg: "result null" });
        }
        if (result.password != password) {
          return done(null, false, { msg: "incorrect password" });
        }
        if (result.password == password) {
          return done(null, result);
        }
      });
    })
  );

  passport.serializeUser((user, done) => {
    console.log("user=", user.id);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("idjdnsjdnsdj==", id);
    User.findById(id, (err, result) => {
      if (err) done(err);
      else {
        console.log("deserialize", result);
        done(null, result);
      }
    });
  });
};
