const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Intro = require('./models/introModel');
const Aboutm = require('./models/aboutMModel');
const Experience = require('./models/experinseModel');
const Project = require ('./models/projectModel')
// const Course = require('./models/courseModel');

const dbConfig = require('./config/dbConfig');

const portfolioRoute = require('./routes/portfolioRoute');

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/portfolio', portfolioRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.get('/portfolio', async (req, res) => {
  try {
    const intro = await Intro.find();
    const aboutm = await Aboutm.find();
    const experinse = await Experience.find();
    const project = await Project.find();
    // const course = await Course.find();

    res.status(200).send({
      intro,
      aboutm,
      experinse,
      project,
      // course,
    });
  } catch (err) {
    res.status(500).sendStatus(err);
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

//new about merg (about + aboutme)
app.post('/aboutm', async (req, res) => {
  try {
    const aboutm = await Aboutm.create(req.body);
    res.status(200).json(aboutm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//new experinse
app.post('/exprience', async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//wokr || project
app.post('/works', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// app.post('/course', async (req, res) => {
//   try {
//     const course = await Course.create(req.body);
//     res.status(200).json(course);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
