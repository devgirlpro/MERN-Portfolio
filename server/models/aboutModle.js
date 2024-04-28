const mongoose = require('mongoose');


const aboutSchema = new mongoose.Schema({
    imageURL: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    descriptin2: {
      type: String,
      required: true,
    },
    skils: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  });


  const About = mongoose.model("About", aboutSchema);
  module.exports = About;