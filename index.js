const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./connectDB/connectDB');
const projects = require('./routes/projects');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/projects/', projects);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('Listening on:', port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

app.get('/', async (req, res) => {
  res.send('Welcom to My Portfolio');
});
