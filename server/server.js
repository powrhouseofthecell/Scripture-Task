const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.URI;
const port = process.env.PORT || 4000;
mongoose.connect(uri);

const nameSchema = new mongoose.Schema({
  value: {
    type: String,
  },
});

const Name = mongoose.model('Task', nameSchema);

app.get('/abc', (req, res) => {
  res.send('Hello World');
});

app.post('/sendData', async (req, res) => {
  // const name = new Name({
  //   ...req.body,
  // });
  // try {
  //   await name.save();
  //   res.status(201).send(name);
  // } catch (e) {
  //   res.status(400).send(e);
  // }
  res.send('Route hit');
});

app.listen(port, () => console.log('App Running on port ' + port));
