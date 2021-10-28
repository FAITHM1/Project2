// importing dependecies
require("dotenv").config();
const mongoose = require("mongoose");
/// establish the database connection
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//connoct to Mongo
mongoose.connect(DATABASE_URL, CONFIG);
//CONNECTING to database
mongoose.connection
  .on("open", () => console.log("connected to Mongo"))
  .on("close", () => console.log("disconnected from mongo"))
  .on("error", (error) => console.log(error));
//export the connection
module.exports = mongoose;
