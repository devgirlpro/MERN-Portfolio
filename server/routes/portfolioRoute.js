// const router = require('express').Router();


// //impoer all the models
// const  Intro  = require('../models/introModel');
// const  About  = require('../models/aboutModel');
// const  Experience  = require('../models/experienceModel');
// const  Project  = require('../models/projectModel');
// const  Course  = require('../models/courseModel');
// const  Contact  = require('../models/contactModel');



//  router.get('/get-portfolio-data', async (req, res) => {
//      try {
//        const intro = await Intro.find();
//         const about = await About.find();
//         const experience = await Experience.find();
//         const project = await Project.find();
//         const course = await Course.find();
//         const contact = await Contact.find();

//         res.status(200).send({
//             intro,
//             about,
//             experience,
//             project,
//             course,
//             contact,
//         })
//     }catch(error) {
//         res.status(500).sendStatus(error)
//     }
// })

// module.exports = router;
