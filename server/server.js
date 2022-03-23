const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
const port = process.env.PORT || 4000;

mongoose.connect(uri);

const nameSchema = new mongoose.Schema({
  value: {
    type: String,
  },
});
const Name = mongoose.model('Name', nameSchema);

app.get('/saved', (req, res) => {
  res.send('<h1>Data saved</h1>');
});

app.post('/sendData', async (req, res) => {
  console.log(req.body);
  const name = new Name({
    ...req.body,
  });
  try {
    await name.save();
    res.status(201).send(name);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => console.log('App Running on port ' + port));
