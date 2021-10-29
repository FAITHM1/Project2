///
//import dependencies
const mongoose = require("./connection");
///
//creating item schema
const { Schema, model } = mongoose;
const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    img: String,
    type: String,
    description: String,
    price: { type: Number, required: false },
    url: { type: String, required: false },
    //datePosted: { type: Date, default: Date.now },
    jornal: [String],
  },
  { timestamps: true }
);
const Item = model("Item", itemSchema);
module.exports = Item;
