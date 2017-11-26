const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.post('/register', function(req, res) {
  console.log(req.body);
  req.body.admin = false;
  Account.register(new Account(req.body), req.body.password, function(err, account) {
    if (err)
      return res.status(401).send({status: err.message});

    res.send({status: "Successfully created account " + account.username});

    // passport.authenticate('local')(req, res, function () {
    //   res.send('ok');
    // });
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
