const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();
const createError = require("http-errors");
const path = require("path");
const indexRoute = require("./routes/index");
const memberOnlyRoute = require("./routes/members_only");
const passport_local = require("./config/passport");
const connection = require("./config/database");
const MongoStore = require("connect-mongo")(session);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
//set view engine
app.set("view engine", "pug");

//middlewares
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: connection }),
  })
);

//passport config file
passport_local.passport_local(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", indexRoute);
app.use("/members-only", memberOnlyRoute);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

//error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") == "development" ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000);
