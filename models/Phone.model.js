const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const phoneSchema = new Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  imageFileName: { type: String },
  screen: { type: String, required: true },
  processor: { type: String, required: true },
  ram: { type: Number, required: true }
});

module.exports = model("Phone", phoneSchema);
