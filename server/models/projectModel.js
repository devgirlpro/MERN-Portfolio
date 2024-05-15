const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      tags: [{
        name: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        }
      }],
      image: {
        type: String,
        required: true,
      },
  
      source_code_link: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Project = mongoose.model('projects', projectSchema);
  module.exports = Project;