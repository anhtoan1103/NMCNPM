const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const HostSchema = new mongoose.Schema({
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

const Host = mongoose.model('Host', HostSchema);

module.exports = Host;