const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res, next) => {
  console.log('Received get request for ' + req.originalUrl);
  Product.find(req.query).then(products => {
    res.send(products)
  }).catch(next);
});

router.get('/products/:id', (req, res, next) => {
  console.log('Received get request for ' + req.originalUrl);
  Product.findOne({_id: req.params.id}).then(products => {
    res.send(products)
  }).catch(next);
});

router.post('/products', (req, res, next) => {
  console.log('Received post request for ' + req.originalUrl);
  Product.create(req.body).then(product => {
    res.send(product);
  }).catch(next);
});

router.delete('/products/:id', (req, res, next) => {
  console.log('Received delete request for ' + req.originalUrl);
  Product.findByIdAndRemove({_id: req.params.id}).then(product => {
    res.send(product);
  }).catch(next);
});

router.put('/products/:id', (req, res, next) => {
  console.log('Received put reqeust for ' + req.originalUrl);
  Product.findByIdAndUpdate(req.params.id, req.body).then(product => {
    res.send(product);
  }).catch(next);
});

module.exports = router;
