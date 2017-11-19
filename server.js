const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const app = express();

mongoose.Promise = global.Promise;

// mongo connection
const options = {
  useMongoClient: true
};
mongoose.connect('mongodb://localhost/sport-shop', options).then(() => {
  console.log("Successfully connected to database");
}, error => {
  console.log(error.message);
});

// api file
const api = require('./server/routes/api');

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// angular output folder
app.use(express.static(path.join(__dirname, 'dist')));

// api location
app.use('/api', api);

// send all other requests to angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// error handling
app.use((err, req, res, next) => {
  console.log('Received error: ' + err.message);
  res.status(400).send({error: err.message});
});

// set port
const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
