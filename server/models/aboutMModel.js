const mongoose = require('mongoose');

const aboutmeSchema = new mongoose.Schema(
  {
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
      required: false,
    },
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
  }
);

const Aboutm = mongoose.model('aboutms', aboutmeSchema);
module.exports = Aboutm;
