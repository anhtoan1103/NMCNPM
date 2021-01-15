const mongoose = require('mongoose');

const ngthueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tempPassword: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const ngthue = mongoose.model('ngthue', ngthueSchema);

module.exports = ngthue;