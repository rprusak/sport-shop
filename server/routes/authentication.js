const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.post('/register', function(req, res, next) {
  Account.register(new Account({ username : req.body.username}), req.body.password, (err, account) => {
    if (err)
      next(err);

    res.send({status: "created user " + req.body.username});
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send({status: "authenticated"});
});

router.get('/login', function(req, res){
  if (req.isAuthenticated())
    res.status(200).send({status: "authenticated"});
  else
    res.status(400).send({status: "unauthenticated"})
});

router.get('/logout', function(req, res) {
  req.logout();
  res.send({status: "logged out"});
});

module.exports = router;
