const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      image: {
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
    }
  );


const Course = mongoose.model("courses", courseSchema);
module.exports = Course;