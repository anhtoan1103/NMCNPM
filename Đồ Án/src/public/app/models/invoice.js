const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoice = new Schema({
    P1: { type: String },
    Period: { type: String }

  });

  module.exports = mongoose.model('invoice', invoice);