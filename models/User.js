const mongoose = require("mongoose");
const connection = require("../config/database");

const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("name").get(function () {
  return this.fname + " " + this.lname;
});

UserSchema.virtual("url").get(function () {
  return "user/" + this._id;
});

const User = connection.model("User", UserSchema);
module.exports = User;
