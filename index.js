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
  const uri = `mongodb+srv://shakil:TQxOSOiS6mhoMNqh@cluster0.ogvv6.mongodb.net/developer_portfolio?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(uri);
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
