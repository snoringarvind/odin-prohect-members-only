const mongoose = require("mongoose");
require("dotenv/config"); //also require("dotenv").config()

const connection = mongoose.createConnection(process.env.DB_Connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
