const express = require('express');
const router = express.Router();
const Product = require('../models/product').Product;

router.get('/products', (req, res, next) => {
  if (req.query.hasOwnProperty('name')) {
    req.query.name = new RegExp(req.query.name, "i");
  }

  if (req.query.hasOwnProperty('minimumPrice')) {
    if (!req.query.hasOwnProperty('price')) {
      req.query.price = {};
    }

    req.query.price.$gt = req.query.minimumPrice;
    delete req.query.minimumPrice;
  }

  if (req.query.hasOwnProperty('maximumPrice')) {
    if (!req.query.hasOwnProperty('price')) {
      req.query.price = {};
    }

    req.query.price.$lt = req.query.maximumPrice;
    delete req.query.maximumPrice;
  }

  console.log(req.query);
  Product.find(req.query).then(products => {
    res.send(products)
  }).catch(next);
});

router.get('/products/:id', (req, res, next) => {
  Product.findOne({_id: req.params.id}).then(products => {
    res.send(products)
  }).catch(next);
});

router.post('/products', (req, res, next) => {
  Product.create(req.body).then(product => {
    res.send(product);
  }).catch(next);
});

router.delete('/products/:id', (req, res, next) => {
  Product.findByIdAndRemove({_id: req.params.id}).then(product => {
    res.send(product);
  }).catch(next);
});

router.put('/products/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body).then(product => {
    res.send(product);
  }).catch(next);
});

module.exports = router;
