const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const AdminSchema = new mongoose.Schema({
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
  }
},{
  timestamps: true,
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;