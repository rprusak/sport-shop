const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minLength: 3
  },
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
  email: {
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
    trim: true
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
  admin: {
    type: Boolean,
    default: false
  }
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
