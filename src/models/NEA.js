const mongoose = require("mongoose");

const neaSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  a: {
    type: Number,
    required: true,
  },
  e: {
    type: Number,
    required: true,
  },
  i: {
    type: Number,
    required: true,
  },
  om: {
    type: Number,
    required: true,
  },
  w: {
    type: Number,
    required: true,
  },
  ma: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("NEA", neaSchema);
