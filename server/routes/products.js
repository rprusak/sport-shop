const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res, next) => {
  console.log('Received get for /products');
  Product.find({}).then(products => {
    res.send(products)
  }).catch(next);
});

router.post('/products', (req, res, next) => {
  console.log('Received post for /products');
  Product.create(req.body).then(product => {
    res.send(product);
  }).catch(next);
});

router.delete('/products/:id', (req, res, next) => {
  console.log('Received delete for /products/' + req.params.id);
  Product.findByIdAndRemove({_id: req.params.id}).then(product => {
    res.send(product);
  }).catch(next);
});

router.put('/products/:id', (req, res) => {
  console.log('Received put for /products/' + req.params.id);

});

module.exports = router;
