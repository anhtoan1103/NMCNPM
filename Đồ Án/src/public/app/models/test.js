const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = new Schema({
    name: { type: String },
    description : { type: String},
    image : { type: String}
  });

  module.exports = mongoose.model('test', test);

  