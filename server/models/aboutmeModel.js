const mongoose = require('mongoose');


const aboutmeSchema = new mongoose.Schema({
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    descriptin: {
      type: String,
      required: true,
    },
    skils: {
        type: Array,
        required: false
    },
  },
  {
    timestamps: true,
  });


  const Aboutme = mongoose.model("aboutmes", aboutmeSchema);
  module.exports = Aboutme;