const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema =  new Schema({
  name: {
    type: String,
    trim: true,
    minLength: 3
  },
  surname: {
    type: String,
    trim: true,
    minLength: 3
  },
  city: {
    type: String,
    required: true,
    minLength: 2
  },
  address: {
    type: String,
    minLength: 5,
    required: true,
    trim: true
  },
  delivery: {
    type: String,
    required: true,
    enum: ['Poczta Polska', 'Kurier DHL', 'Inpost'],
  },
  payment: {
    type: String,
    required: true,
    enum: ['Płatność przy odbiorze', 'Przelew'],
  },
  status: {
    type: String,
    enum: ['Nowe', 'Zrealizowane'],
    default: 'Nowe'
  },
  comment: {
    type: String
  },
  userId: {
    type: String
  }
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
