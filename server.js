const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const uri = process.env.URI;
const port = process.env.PORT;
mongoose.connect(uri);

const nameSchema = new mongoose.Schema({
  value: {
    type: String,
  },
});

const Name = mongoose.model('Task', nameSchema);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendData', async (req, res) => {
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

app.listen(port, () => console.log('App Running'));
