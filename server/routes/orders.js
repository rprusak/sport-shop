const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/orders', (req, res, next) => {
  Order.find(req.query).then(products => {
    res.send(products)
  }).catch(next);
});

router.post('/orders', (req, res, next) => {
  req.body.status = 'Nowe';
  Order.create(req.body).then(product => {
    res.send(product);
  }).catch(next);
});

router.get('/orders/:id', (req, res, next) => {
  Order.findOne({_id: req.params.id}).then(products => {
    res.send(products)
  }).catch(next);
});

router.delete('/orders/:id', (req, res, next) => {
  Order.findByIdAndRemove({_id: req.params.id}).then(products => {
    res.send(products)
  }).catch(next);
});

router.put('/orders/:id', (req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, req.body).then(products => {
    res.send(products)
  }).catch(next);
});

module.exports = router;
