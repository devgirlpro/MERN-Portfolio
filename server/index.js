const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Intro = require('./models/introModel');
const About = require('./models/aboutModel');
const Experience = require('./models/experienceModel');
const Project = require('./models/projectModel');
const Course = require('./models/courseModel');
const Contact = require('./models/contactModel');

const dbConfig = require('./config/dbConfig');

const portfolioRoute = require('./routes/portfolioRoute');

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/portfolio', portfolioRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/portfolio', async (req, res) => {
  try {
    const intro = await Intro.find();
    const about = await About.find();
    const experience = await Experience.find();
    const project = await Project.find();
    const course = await Course.find();
    const contact = await Contact.find();

    res.status(200).send({
      intro,
      about,
      experience,
      project,
      course,
      contact,
  })
  } catch (err) {
    res.status(500).sendStatus(err)
  }
});

app.post('/intro', async (req, res) => {
  try {
    const intro = await Intro.create(req.body);
    res.status(200).json(intro);
  } catch (error) {
    res.status(500).json({ message: error.messaage });
  }
});

app.post('/about', async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/exprience', async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/project', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/course', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/contact', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
