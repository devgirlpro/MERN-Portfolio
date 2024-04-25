const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig")
const PORT = process.env.PORT || 5000;


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})