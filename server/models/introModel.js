const mongoose = require('mongoose');


const IntroSchema = new mongoose.Schema({
    welcomeText: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  });


  const Intro = mongoose.model("intros", IntroSchema);
  module.exports = Intro;