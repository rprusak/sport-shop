const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 500
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    enum: ['obuwie', 'odziez', 'sprzet', 'akcesoria', 'inne'],
    required: true
  },
  discounted: {
    type: Boolean,
    required: true,
    default: false
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  image: {
    type: String,
    required: true,
    default: 'http://placehold.it/700x300'
  }
});

const Product = mongoose.model('product', ProductSchema);

module.exports.Product = Product;
module.exports.ProductSchema = ProductSchema;
