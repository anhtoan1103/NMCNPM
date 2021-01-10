const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const hotel = new Schema({
    name: { type: String },
    description : { type: String},
    image : { type: String},
    location : { type: String},
    price : { type: String},
    star : { type: Number},
    slug: {type: String, slug: 'name', unique: true}
  },{
    timestamps: true,
  });

  module.exports = mongoose.model('hotel', hotel);

  