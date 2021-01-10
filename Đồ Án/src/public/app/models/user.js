const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const UserSchema = new mongoose.Schema({
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
},{
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;