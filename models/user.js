//dependencies
const mongoose = require("./connection");

const { Schema, model } = mongoose;
//making user schema
const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
//making new user model
const User = model("User", userSchema);
///export user
module.exports = User;
