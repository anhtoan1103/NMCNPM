const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const invoice = new Schema({
    P1: { type: String },
    P2: { type: String },
    Period: { type: String },
    Payment: { type: String },
    Hotel: { type: String },
    Room: { type: String },
    Date: { type: Date },

  },{
    timestamps: true,
  });

  module.exports = mongoose.model('invoice', invoice);