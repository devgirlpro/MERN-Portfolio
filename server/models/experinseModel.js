const mongoose = require('mongoose');

const experienseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    icon: {
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

const Experiense = mongoose.model('experienses', experienseSchema);
module.exports = Experiense;
