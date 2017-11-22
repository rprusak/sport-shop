const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan')('combined');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

require('./conf/mongo');

const app = express();

// api file
const api = require('./routes/api');

// middleware
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressSession({secret: 'mySessionsSecret', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// angular output folder
app.use(express.static(path.join(__dirname, '../dist')));

// passport config
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

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
