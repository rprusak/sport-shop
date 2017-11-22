const express = require('express');
const router = express.Router();

const authentication = require('./authentication');
const products = require('./products');

router.use(authentication);
router.use(products);

router.use('*', (req, res) => {
  res.status(404).send({error: "Not found!"});
});

module.exports = router;
