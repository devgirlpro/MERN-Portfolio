const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.mongo_url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.url}`);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error connecting to database');
});

connection.on('connected', () => {
  console.log('mongoDB connected successfull');
});

module.exports = connection;
