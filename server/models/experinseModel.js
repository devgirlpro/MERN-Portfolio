const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    iconBg: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },

    points: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model('experiences', experienceSchema);
module.exports = Experience;
