const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Remote Work Enhancement API!');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});