const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan')('combined');
require('./conf/mongo');

const app = express();

// api file
const api = require('./routes/api');

app.use(logger);

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// angular output folder
app.use(express.static(path.join(__dirname, '../dist')));

// api location
app.use('/api', api);

// send all other requests to angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// error handling
app.use((err, req, res, next) => {
  res.status(400).send({error: err.message});
});

module.exports = app;
