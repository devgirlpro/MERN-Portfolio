const express = require('express');
const app = express();
require('dotenv').config();
const Intro = require('./models/introModle');
const About = require('./models/aboutModle');
const Experience = require('./models/experienceModle');
const Project = require('./models/projectModle');
const Course = require('./models/courseModle');
const Contact = require('./models/contactModle')

const dbConfig = require('./config/dbConfig');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/intro', async(req, res) => {
  try {
    const intro = await Intro.create(req.body);
    res.status(200).json(intro)
  } catch (error) {
    res.status(500).json({ message: error.messaage });
  }
});


app.post('/about', async(req, res) => {
  try {
const about = await About.create(req.body)
res.status(200).json(about)
  }catch(error) {
    res.status(500).json({ message: error.message })
  }
});

app.post('/exprience', async(req, res) => {
  try {
    const experience = await Experience.create(req.body)
    res.status(200).json(experience)
  }catch(error) {
    res.status(500).json({ message: error.message })

  }
}) 


app.post('/project', async(req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(200).json(project)
  }catch(error) {
    res.status(500).json({ message: error.message })

  }
}) 

app.post('/course', async(req, res) => {
  try {
    const course = await Course.create(req.body)
    res.status(200).json(course)
  }catch(error) {
    res.status(500).json({ message: error.message })

  }
}) 


app.post('/contact', async(req, res) => {
  try {
    const contact = await Contact.create(req.body)
    res.status(200).json(contact)
  }catch(error) {
    res.status(500).json({ message: error.message })

  }
}) 



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
